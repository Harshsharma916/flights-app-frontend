import React from "react";
import p1 from "../../Images/0.jpg";
import p2 from "../../Images/1.jpg";
import p3 from "../../Images/2.jpg";
import p4 from "../../Images/3.jpg";
import styled from "styled-components";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: black;
  flex-direction: column;
  position: relative;
`;
const Img = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  border-color: white;
`;
const Endpage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname);
  if(location.pathname == '/page4'){
    function callback(){
      console.log('Inside callback')
    }
    callback();
  }
  return (
    <Div style={{ height: "100vh", width: "100vw" }}>
      <Img src={p4} />
      {/* <Footer
        onClick1={() => dispatch({ type: "endpage", data: "end to page 1" })}
      /> */}
    </Div>
  );
};

export default Endpage;
