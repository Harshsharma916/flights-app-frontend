import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  width: 99%;
  height: 50px;
  background: gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;
const Button = styled.div`
  background: ${(props) => props.color};
  //   width: 40%;
  // height: 35px;
  color: white;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 0px;
  text-align: center;
`;
const Footer = ({ number1, number2, skip, onClick1, onClick2 }) => {
  return skip ? (
    <Div>
      <Link
        to={`/page${number2}`}
        style={{ width: "40%", textDecoration: "none" }}
        onClick={onClick1}
      >
        <Button color="#24A0ED">Next</Button>
      </Link>
      <Link
        to="/page4"
        style={{ width: "40%", textDecoration: "none" }}
        onClick={onClick2}
      >
        <Button color="red"> Skip</Button>
      </Link>
    </Div>
  ) : (
    <Div>
      <Link
        to={`/page${number2}`}
        to={number1 ? `/page${number1}` : "/"}
        style={{ width: "40%", textDecoration: "none" }}
        onClick={onClick1}
      >
        <Button color="red"> Back</Button>
      </Link>
      {number2 ? (
        <Link
          to={`/page${number2}`}
          style={{ width: "40%", textDecoration: "none" }}
          onClick={onClick2}
        >
          <Button color="#24A0ED">Next</Button>
        </Link>
      ) : (
        ""
      )}
    </Div>
  );
};

export default Footer;
