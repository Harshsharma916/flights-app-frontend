import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Col, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Apicall } from "../../Components/Apicaller";
import { sendOTPService } from "../../services/user-services";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { SendMessageToCSharp } from "../../Components/Unitysendmsg";
import { encrypt } from '../../utils/encryption';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 200px;
  justify-content: space-around;
  align-items: center;
  background: #1111;
  border-radius: 5px;
  padding: 20px;
`;
const Input = styled.input`
  width: 95%;
  // height: 40px;
  padding: 10px 0px 10px 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 10px;
  border-radius: 5px;
  border: none;
`;
const Title = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 400;
`;
const Button = styled.div`
  // width: 100px;
  padding: 8px 20px;
  background: #24a0ed;
  color: white;
  font-size: 14px;
  border-radius: 4px;
`;
const Login = () => {
  const state = useSelector((state) => state);
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.userProfile?.token) {
      // console.log(token);
      navigate("/page1");
    }
  }, []);

  function sendotp() {
    if (Number.isInteger(parseInt(number))) {
      console.log("SENT");
      const data = {
        phoneNumber: number,
        countryCode: "+91",
      };
      const encryptedNumber = encrypt(
        `${data.phoneNumber}|${Date.now() + 30000}`
      );
      console.log("ENCRYPTED_NUMBER", encryptedNumber, encryptedNumber.length);
      const encdata = {
        data: {
          // phone_number: Number(action.data?.phoneNumber),
          phoneNumber: encryptedNumber,
          countryCode: data.countryCode,
        },
      };
      // axios
      //   .post("https://galactus.homingos.com/accounts/send_otp", data)
      //   .then(function (response) {
      //     // console.log(response);
      //     dispatch({ type: "otpData", data: data });
      //     console.log('HARSH SHARMA')
      //     navigate("/otp");
      //   })
      //   .catch(function (error) {
      //     message.error("Something went wrong");
      //   });
      dispatch({ type: "otpData", data: data });

      if (window.vuplex) {
        send();
      } else {
        window.addEventListener("vuplexready", send);
      }

      function send() {
        window.vuplex.postMessage({
          type: "Login",
          message: data,
        });
      }

      async function changeroute() {
        const response = await Apicall(sendOTPService, encdata).then(
          (data) => data
        );
        console.log(response, "two");
        if (!response.error) {
          navigate("/otp");
        }
      }
      changeroute();
    } else {
      console.log("ERROR");
      message.error("Please enter a valid phone number");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Wrapper>
        <Title>Enter your phone number to Login</Title>
        <Input
          value={number}
          type=""
          maxLength={10}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Your phone number"
        />
        <Button onClick={sendotp}>Send OTP</Button>
      </Wrapper>
    </div>
  );
};

export default Login;
