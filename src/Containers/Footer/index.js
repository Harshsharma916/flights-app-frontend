import styled from "styled-components";

const Div = styled.div`
  padding: 30px;
  background: black;
  display: flex;
  flex-direction: column;
`;
const Button = styled.div`
  background: white;
  width: 180px;
  // height: 35px;
  color: black;
  font-size: 24px
  weight: 700;
  border-radius: 6px;
  padding: 12px 0px;
  text-align: center;
`;

const Heading = styled.p`
  margin: 0px;
  font-size: 28px;
  font-weight: 900;
  color: white;
  margin-bottom: 10px;
`
const Bodytext = styled.p`
  margin: 0px;
  font-size: 18px;
  line-height: 150%;
  color: white;
  margin-bottom: 25px;
`
const Footer = ({ heading,bodytext,buttontext,onClick }) => {
  return(
    <Div>
      <Heading>{heading}</Heading>
      <Bodytext>{bodytext}</Bodytext>
      <Button onClick={onClick}>{buttontext}</Button>
    </Div>
  );
};

export default Footer;
