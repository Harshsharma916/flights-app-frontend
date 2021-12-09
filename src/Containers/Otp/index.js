/**
 *
 * Otp
 *
 */

import React, { memo, useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import T from "../../Components/T";
import { useNavigate } from "react-router-dom";
// import routeConstants from '@app/utils/routeConstants';
// import { Helmet } from 'react-helmet';
// import CloseHeader from '@app/components/CloseHeader/index';
// import BackIcon from 'images/back.svg';
// import { loginCreators } from "../Login/reducer";
// import { Heading } from 'Containers/Login/index';
import styled from "styled-components";
// import { Wrapper, colors } from "@app/themes";
import CardDefault from "../../Components/CardDefault/index";
import OTP from "../../Components/Otp";
import { message } from "antd";
// import { otpCreators } from "./reducer";
// import { OTP_LENGTH } from "@app/utils/constants";
// import { selectToken } from '../App/selectors';
import OtpTimer from "otp-timer";
import axios from "axios";
import { useSelector } from "react-redux";
import { Apicall } from "../../Components/Apicaller";
import {
  checkPinCodeService,
  verifyOTPService,
} from "../../services/user-services";
import { SendMessageToCSharp } from "../../Components/Unitysendmsg";
import { ReceieveMsgFromCSharp } from "../../Components/Unityrecievemsg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  // background-color: black;
`;

const Button = styled.button`
  color: white;
  background: #24a0ed;
  padding: 8px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

const P = styled.p`
  margin: 0px;
  font-size: ${(props) => props.s};
  font-weight: ${(props) => props.w};
  color: black;
`;
const ResendB = styled.button`
  color: white;
  background: blue;
  font-size: 8px;
  padding: 2px 5px;
  border: none;
`;
export function Otp({
  otpError,
  otpResponse,
  dispatchClearOtpData,
  loading,
  dispatchSubmitOtp,
  dispatchResendOtp,
  dispatchWebEngage,
  otpFailure,
  token,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const otpData = useSelector((state) => state.otpData);
  console.log(otpData);

  // useEffect(() => {
  //   if (token) {
  //     history.replace(routeConstants.addVideos.route);
  //   }
  // }, [token]);
  // useEffect(() => {
  //   if (!otpData?.phoneNumber) {
  //     history.replace(routeConstants.login.route);
  //   }
  // }, [otpData]);

  const onCloseHeader = () => {
    // dispatchClearOtpData();
    dispatch({ type: "clear" });
    navigate("/");
  };

  const verifyOtp = () => {
    if (otp.length === 5) {
      const data = {
        data: {
          phoneNumber: otpData.phoneNumber,
          countryCode: otpData.countryCode,
          otp: otp,
          deviceType: "UNITY",
          source: "MAGIC",
        },
      };
      // axios
      //   .post("https://galactus.homingos.com/accounts/check_otp", data)
      //   .then(function (response) {
      //     const { data, error } = response;
      //     console.log(data,'DATA 1');
      //     // console.log(ok);
      //     if (!error) {
      //       console.log('CHECKOTP')
      //       // const { token, ...profile } = data.data;
      //       // dispatch({ type: "otpData", data: { token: token } });
      //       dispatch({ type: "userProfile", data: data.data });
      //       navigate("/page1");
      //     }
      //   })
      //   .catch(function (error) {
      //     message.error(error);
      //   });
      // const response = ReceieveMsgFromCSharp();
      // console.log(response?.otpverified);
      // if(response?.otpverified){
      //   navigate('/page1')
      // }

      async function changeroute() {
        let value = await Apicall(verifyOTPService, data).then((data) => data);
        if (!value.error) {
          console.log('VERIFIED')
          if (window.vuplex) {
            send();
          } else {
            window.addEventListener("vuplexready", send);
          }

          function send() {
            window.vuplex.postMessage({
              type: "OTP verification",
              message: "OTP verified",
            });
          }
          // navigate("/page1");
        }
      }
      changeroute();
    } else {
      message.error({content:'Invalid OTP',duration:2});
    }
  };

  const resendOtp = () => {
    const data = {
      data: {
        phoneNumber: otpData.phoneNumber,
        countryCode: otpData.countryCode,
        otp: otp,
        deviceType: "UNITY",
        source: "MAGIC",
      },
    };
    // axios
    //   .post("https://galactus.homingos.com/accounts/resend_otp", data)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     message.error({content:'asdasda',duration:'2'});
    //   });
  };

  return (
    <Wrapper>
      <CardDefault>
        <P s="14px" w="400" onClick={onCloseHeader}>
          {"<-  Change number"}
        </P>
        <OTP otpError={otpFailure} otp={otp} setOtp={setOtp} error={false} />
        <OtpTimer seconds={0} minutes={2} resend={resendOtp} />
        <Button onClick={verifyOtp}>Submit OTP</Button>
      </CardDefault>
    </Wrapper>
  );
}

export default Otp;
