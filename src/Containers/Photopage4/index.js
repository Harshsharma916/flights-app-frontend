import React from "react";
import p4 from "../../Images/4.png";
import styled from "styled-components";
import Footer from "../Footer";
import { useDispatch } from "react-redux";

const Div = styled.div`
  display: flex;
  //   flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;
`;

const Subdiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  //   height: 80%;
  //   object-fit: contain;
  border-color: white;
`;

const Div1 = styled.div`
  background: white;
  height: 150px;
  width: 100%;
  text-align: center;
`;

const Photopage4 = () => {
  const dispatch = useDispatch();

  function sendMessageToCSharp() {
    // This object passed to postMessage() automatically gets serialized as JSON
    // and is emitted via the C# MessageEmitted event. This API mimics the window.postMessage API.
    if (window.vuplex) {
      // The window.vuplex object already exists, so go ahead and send the message.
      send();
    } else {
      // The window.vuplex object hasn't been initialized yet because the page is still
      // loading, so add an event listener to send the message once it's initialized.
      window.addEventListener('vuplexready', send);
    }
  }

  function send(){
    window.vuplex.postMessage({ type: 'greeting', message: 'Hello from JavaScript!' });
  }

  return (
    <Div>
      <Subdiv>
        <Img src={p4} />
        <Div1>
          Flam has recently launched in US for the thanksgiving season.
        </Div1>
        <Footer
        number1={3}
        number2={2}
        onClick1={() => dispatch({ type: "page4", data: "Page 4 to 3" })}
        onClick2={() => sendMessageToCSharp()}
      />
      </Subdiv>
    </Div>
  );
};

export default Photopage4;
