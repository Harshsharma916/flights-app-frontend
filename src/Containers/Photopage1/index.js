import React from "react";
import p1 from "../../Images/1.png";
import backimg from "../../Images/Back.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export const Div = styled.div`
  // display: flex;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;
`;

export const Subdiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: 70px;
  width: 100%;
  // text-align: center;
  padding: 0px 15px; 
  position: fixed;
  top: 0px;
  z-index: 1;
`;

export const Buttons = styled.div`
  // height: 100%;
  padding: 5px 5px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-right: 30px;
`;

const Photopage1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function sendMessageToCSharp() {
    if (window.vuplex) {
      send();
    } else {
      window.addEventListener("vuplexready", send);
    }
  }

  function send() {
    window.vuplex.postMessage({
      type: "greeting",
      message: "Hello from JavaScript!",
    });
  }

  return (
    <Div>
      <Header>
        <img src={backimg} style={{width:'20px',visibility:'hidden'}}/>
        <Buttons onClick={sendMessageToCSharp}>Skip</Buttons>
      </Header>
      <Subdiv>
        <img src={p1} style={{width:'100%'}}/>
        <Footer
          heading="Hola"
          bodytext="FlamCard is a fascinating experience that makes your printed photos come alive. Try one for free."
          buttontext="Next"
          onClick={() => navigate("/page2")}
        />
      </Subdiv>
    </Div>
  );
};

export default Photopage1;
