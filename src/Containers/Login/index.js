import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Col, message, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Apicall } from "../../Components/Apicaller";
import { sendOTPService } from "../../services/user-services";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { SendMessageToCSharp } from "../../Components/Unitysendmsg";
import { encrypt } from "../../utils/encryption";
import CustomSelect from "../../Components/CustomSelect";
import CustomInput from "../../Components/CustomInput";
import { renderSelectOptions } from "../../utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // width: 250px;
  // height: 500px;
  justify-content: space-around;
  // align-items: center;
  // background: #1111;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
`;

const Inputdiv = styled.div`
  border-radius: 7px;
  border: 0.7px solid grey;
  margin: 30px 0px;
  width: 95%;

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
    width: 94%;
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
  background: black;
  color: white;
  font-size: 14px;
  font-weight: 500;
  // border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Login = () => {
  const state = useSelector((state) => state);
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [countryCode,setCountryCode] = useState('+91');

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
    if (Number.isInteger(parseInt(number))) {
      // window.caches.open().then((cache) => {
      //   cache.put('https://localhost:3000',number);
      //   alert('Data Added into cache!')
      // });
      console.log("SENT",countryCode);
      
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
    <Wrapper>
      <Title>LOGIN</Title>
      <Subtitle>Login to access the flamCards and order new flamCards</Subtitle>
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
          type=""
          maxLength={10}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Your phone number"
        />
      </Inputdiv>
      {/* <Form form={form}>
        <Form.Item>
          <Row>
            <Form.Item style={{ width: "27.5%" }} name={"countryCode"}>
              <CustomSelect
                dropdownStyle={{ minWidth: "300%" }}
                showArrow
                defaultValue={countries[1]?.code}
                style={{ width: "100%" }}
                placeholder={"Country Code"}
                optionFilterProp="children"
              >
                {renderSelectOptions(countries)}
              </CustomSelect>
            </Form.Item>
            <Form.Item

              style={{ width: "67.5%" }}
              name={"mobileNumber"}
            >
              <CustomInput
                maxLength={10}
                onPressEnter={sendotp}
                type="tel"
                placeholder={"Your phone number"}
              />
            </Form.Item>
          </Row>
        </Form.Item>
      </Form> */}
      <Button onClick={sendotp}>Send OTP</Button>
    </Wrapper>
  );
};

export default Login;
