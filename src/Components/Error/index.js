import styled from "styled-components";
// import { VscError } from "react-icons/fa";

const Wrapper = styled.div`

  display: flex;
  position: absolute;
  background: black;
  top: 100px;
//   left: 50%;
  padding: 5px 15px;
  font-size: 12px;
  z-index: 10;

//   visibility: hidden;
//   opacity: 0;
//   transition: visibility 0s linear 1s, opacity 1s;
`;

const Error = ({ message }) => {
  return (
    <Wrapper>
      {message}
      {/* <VscError /> */}
    </Wrapper>
  );
};

export default Error;