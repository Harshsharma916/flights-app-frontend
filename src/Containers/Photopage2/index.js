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
const Photopage2 = () => {
  const dispatch = useDispatch();

  return (
    <Div style={{ height: "100vh", width: "100vw" }}>
      <Img src={p2} />
      <Footer
        number2={3}
        skip={false}
        onClick1={() => dispatch({ type: 'page2', data: "Page 2 to 1" })}
        onClick2={() => dispatch({ type: 'page2', data: "Page 2 to 3" })}
      />
    </Div>
  );
};

export default Photopage2;
