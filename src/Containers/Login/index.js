import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Col, message, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Apicall, AxiosPost } from "../../Components/Apicaller";
import { encrypt } from "../../utils/encryption";
import { renderSelectOptions } from "../../utils";
import Error from "../../Components/Error";
import { Body, Wrapper } from "../../Components/ExportStyles";
import LogoHeader from "../../Components/LogoHeader";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: space-around;
  // align-items: center;
  background: white;
  border-radius: 5px;
  padding: 30px;
  margin: 20px;
  position: relative;
`;

const Inputdiv = styled.div`
  border-radius: 7px;
  border: 0.7px solid grey;
  margin: 30px 0px;
  // width: 95%;

  .input1 {
    padding: 15px 0px 15px 15px;
    // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 10px;
    border: none;
    border-bottom: 0.7px solid grey;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background: white;
  }

  .input2 {
    width: 97%;
    padding: 15px 0px 15px 15px;
    // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 10px;
    border: none;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;

const Title = styled.p`
  margin: 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: 150%;
`;
const Subtitle = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: 100;
  line-height: 150%;
`;

const Button = styled.div`
  // width: 100px;
  text-align: center;
  padding: 10px 0px;
  background: linear-gradient(to left,#318ce7, #00308f);
  color: white;
  font-size: 14px;
  font-weight: 500;
  // border-radius: 4px;
`;

const Login = () => {
  const state = useSelector((state) => state);
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState("+91");

  useEffect(() => {
    if (state?.userProfile?.token) {
      // console.log(token);
      navigate("/page1");
    }
  }, []);

  const countries = [
    {
      country: "India(भारत)",
      code: "+91",
      flag: "IN",
    },
    {
      country: "United States",
      code: "+1",
      flag: "US",
    },
    {
      country: "Netherlands (Nederland)",
      code: "+31",
      flag: "NL",
    },
    {
      country: "Belgium (België)",
      code: "+32",
      flag: "BE",
    },
    {
      country: "France",
      code: "+33",
      flag: "FR",
    },
    {
      country: "Spain (España)",
      code: "+34",
      flag: "ES",
    },
    {
      country: "Luxembourg",
      code: "+352",
      flag: "LU",
    },
    {
      country: "Finland (Suomi)",
      code: "+358",
      flag: "FI",
    },
    {
      country: "Switzerland (Schweiz)",
      code: "+41",
      flag: "CH",
    },
    {
      country: "United Kingdom",
      code: "+44",
      code: "GB",
    },
  ];

  function sendotp() {
    if (Number.isInteger(parseInt(number)) && number.length == 10) {
      // window.caches.open().then((cache) => {
      //   cache.put('https://localhost:3000',number);
      //   alert('Data Added into cache!')
      // });
      console.log("SENT", countryCode);

      const data = {
        phoneNumber: number,
        countryCode: countryCode,
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

      async function changeroute() {
        // const response = await Apicall("http://localhost:5000/login", {
        //   phoneNumber: data.phoneNumber,
        // }).then((data) => data);
        const response = await AxiosPost('/login',{phoneNumber:data.phoneNumber})
        console.log(response, "two");
        if (response) {
          navigate("/otp");
        }
      }
      changeroute();
    } else {
      console.log("ERROR");
      // message.error("Please enter a valid phone number");
      <Error message="Please enter a valid phone number" />;
    }
  }

  return (
    <Wrapper>
      <LogoHeader showLoginButton={true}/>
      <Body>
        <Card>
          <Title>LOGIN</Title>
          <Subtitle>
            Login to see the world fly with you 
          </Subtitle>
          <Inputdiv>
            <select
              className="input1"
              // dropdownStyle={{ minWidth: "300%" }}
              // showArrow
              // defaultValue={countries[0]?.code}
              style={{ width: "100%" }}
              placeholder={"Country Code"}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              {renderSelectOptions(countries)}
            </select>
            <input
              className="input2"
              value={number}
              maxLength={10}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your phone number"
            />
          </Inputdiv>
          <Button onClick={sendotp}>Send OTP</Button>
        </Card>
      </Body>
    </Wrapper>
  );
};

export default Login;
