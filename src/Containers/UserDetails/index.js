import { useState } from "react";
import styled from "styled-components";
import { AxiosPost } from "../../Components/Apicaller";
import { Body, Button, Text, Wrapper } from "../../Components/ExportStyles";
import LogoHeader from "../../Components/LogoHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const UserWrapper = styled(Wrapper)`
//   background: linear-gradient(#318ce7, #00308f);
// `;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 30px 60px 40px 40px;
  border-radius: 5px;
  gap: 15px;
  width: 350px;
`;
const Input = styled.input`
  //   width: 90%;
  border: 0.5px solid grey;
  padding: 10px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
`;

const UserDetails = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const otpData = useSelector((state) => state.otpData);
  const navigate = useNavigate();

  async function submitData() {
    console.log(name, email);
    var re = /\S+@\S+\.\S+/;

    if (re.test(email) == true && name.length != 0) {
      const data = {
        phoneNumber: otpData.phoneNumber,
        name: name,
        email: email,
      };
      dispatch({ type: "userDetails", data: data });
      let response = await AxiosPost("/userdetails?upload=true", data);
      console.log(response, "RESPONSE");
      if (response.statusText == "OK") {
        console.log("CHECKED");
        navigate("/homepage");
      }
    }
  }

  return (
    <Wrapper>
      <LogoHeader />
      <Body>
        <Card>
          <Text size="28px" weight="100" style={{ marginBottom: "15px" }}>
            ENTER YOUR DETAILS
          </Text>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your name"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Id"
          />
          <Button
            scale={1.05}
            style={{ marginTop: "30px", textAlign: "center" }}
            onClick={() => submitData()}
          >
            Submit
          </Button>
        </Card>
      </Body>
    </Wrapper>
  );
};

export default UserDetails;
