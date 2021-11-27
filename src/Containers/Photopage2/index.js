import React from "react";
import p2 from "../../Images/2.png";
import backimg from "../../Images/Back.png";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Div,Subdiv,Header,Buttons } from "../Photopage1";

const Photopage2 = () => {

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
        <img src={backimg} style={{width:'20px'}} onClick={() => navigate("/")}/>
        <Buttons onClick={sendMessageToCSharp}>Skip</Buttons>
      </Header>
      <Subdiv>
        <img src={p2} style={{width: '100%'}}/>
        <Footer
          heading="Holiday Gift Inside"
          bodytext="Start a trend by sending your loved ones something new and unique."
          buttontext="Next"
          onClick={() => navigate("/page3")}
        />
      </Subdiv>
    </Div>
  );
};

export default Photopage2;
