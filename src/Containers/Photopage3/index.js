import React from "react";
import p3 from "../../Images/3.png";
import backimg from "../../Images/Back.png";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Div,Subdiv,Header,Buttons } from "../Photopage1";

const Photopage3 = () => {

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
        <img src={backimg} style={{width:'20px'}} onClick={() => navigate("/page2")}/>
        <Buttons onClick={sendMessageToCSharp}>Skip</Buttons>
      </Header>
      <Subdiv>
        <img src={p3} style={{width: '100%'}}/>
        <Footer
          heading="First FlamCard Free"
          bodytext="Experience the magic of creating your first FlamCard. Order now for free."
          buttontext="Get started"
          onClick={() => sendMessageToCSharp()}
        />
      </Subdiv>
    </Div>
  );
};

export default Photopage3;
