import React from "react";
import p1 from "../../Images/0.jpg";
import p2 from "../../Images/1.jpg";
import p3 from "../../Images/2.jpg";
import styled from "styled-components";
import Footer from "../Footer";
import { useDispatch } from "react-redux";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: black;
`;
const Img = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  border-color: white;
`;
const Photopage3 = () => {
  const dispatch = useDispatch();
  return (
    <Div style={{ height: "100vh", width: "100vw" }}>
      <Img src={p3} />
      <Footer
        number1={2}
        number2={4}
        onClick1={() => dispatch({ type: 'page3', data: "Page 3 to 2" })}
        onClick2={() => dispatch({ type: 'page3', data: "Page 3 to end" })}
      />
    </Div>
  );
};

export default Photopage3;
