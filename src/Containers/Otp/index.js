/**
 *
 * Otp
 *
 */

import React, { memo, useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardDefault from "../../Components/CardDefault/index";
import OTP from "../../Components/Otp";
import OtpTimer from "otp-timer";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  checkPinCodeService,
  verifyOTPService,
} from "../../services/user-services";
import { Body, Wrapper } from "../../Components/ExportStyles";
import LogoHeader from "../../Components/LogoHeader";
import { AxiosPost } from "../../Components/Apicaller";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 500px;
  // height: 400px;
  background: linear-gradient(#318ce7, #00308f);
  border-radius: 8px;
`;

const Button = styled.button`
  color: white;
  background: linear-gradient(to left, #318ce7, #00308f);
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

export function Otp({ otpFailure }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpVal, setOtpVal] = useState(0);
  const [loader, setloader] = useState(false);
  const otpData = useSelector((state) => state.otpData);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/login/otp?number=${otpData.phoneNumber}`)
      .then(function (response) {
        setOtpVal(response.data.value);
      });
  }, []);

  console.log(otpVal, "TOP");
  const onCloseHeader = () => {
    // dispatchClearOtpData();
    dispatch({ type: "clear" });
    navigate("/");
  };

  const verifyOtp = () => {
    if (otp.length === 4) {
      const data = {
        phoneNumber: otpData.phoneNumber,
        countryCode: otpData.countryCode,
        otp: otp,
      };
      console.log(data, "INSIDE SEND OTP");

      async function Otpvalidation() {
        const otpResponse = await AxiosPost("/login/otp", { Otp: data.otp });
        // console.log(otpResponse);
        if (otpResponse.statusText == "OK") {
          console.log('for user details')
          setloader(true);
          const userResponse = await AxiosPost("/userdetails", {
            phoneNumber: data.phoneNumber,
          });
          console.log(userResponse);
          if (userResponse.data.dataRetrieved == true) {
            dispatch({ type: "userDetails", data: userResponse?.data?.personData });
            navigate("/homepage");
          } else {
            navigate("/userdetails");
          }
        }
      }
      Otpvalidation();
    } else {
      // message.error({ content: "Invalid OTP", duration: 2 });
    }
  };

  const resendOtp = () => {
    const data = {
      data: {
        phoneNumber: otpData.phoneNumber,
        countryCode: otpData.countryCode,
        otp: otp,
      },
    };
  };

  return (
    <Wrapper style={{ background: "white" }}>
      <LogoHeader />
      <Body>
        <Card>
          <CardDefault>
            <P s="14px" w="400" onClick={onCloseHeader}>
              {"<--  Change number"}
            </P>
            <P s="20px" w="500">
              {otpVal}
            </P>
            <OTP
              otpError={otpFailure}
              otp={otp}
              setOtp={setOtp}
              error={false}
            />
            <OtpTimer seconds={0} minutes={1} resend={resendOtp} />
            <Button onClick={verifyOtp}>Submit OTP</Button>
          </CardDefault>
        </Card>
      </Body>
    </Wrapper>
  );
}

export default Otp;
