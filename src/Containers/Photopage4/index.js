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

  return (
    <Div>
      <Subdiv>
        <Img src={p4} />
        <Div1>
          Flam has recently launched in US for the thanksgiving season.
        </Div1>
        <Footer number1={3} skip={true} />
      </Subdiv>
      {/* <Footer
        number1={2}
        number2={4}
        onClick1={() => dispatch({ type: "page3", data: "Page 3 to 2" })}
        onClick2={
          (() => {
            if (window.vuplex) {
              // The window.vuplex object already exists, so go ahead and send the message.
              // console.log('HARSH SHARMA')
              sendMessageToCSharp();
            } else {
              // console.log('HARSH SHARMA')
              // The window.vuplex object hasn't been initialized yet because the page is still
              // loading, so add an event listener to send the message once it's initialized.
              window.addEventListener("vuplexready", sendMessageToCSharp);
            }
          },
          dispatch({ type: "page3", data: "Page 3 to end" }))
        }
      /> */}
    </Div>
  );
};

export default Photopage4;
