import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  const token = useSelector((state) => state?.userProfile?.token)
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(token){
      console.log(token)
      navigate('/page1')
    }
  },[])

  function sendotp() {
    if (Number.isInteger(parseInt(number))) {
      console.log('SENT')
      const data = {
        phone_number: number,
        country_code: "+91",
        source: "PHYSICAL_US",
      };
      axios
        .post("https://galactus.homingos.com/accounts/send_otp", data)
        .then(function (response) {
          // console.log(response);
          dispatch({ type: "otpData", data: data });
          console.log('HARSH SHARMA')
          navigate("/otp");
        })
        .catch(function (error) {
          message.error("Something went wrong");
        });
    } else {
      console.log('ERROR')
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
          type=''
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
