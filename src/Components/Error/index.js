import styled from "styled-components";
import { VscError } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  left: 50%;
  padding: 5px 15px;
  font-size: 12px;
  transition-property: visibility;
`;

const Error = ({ message }) => {
  return (
    <Wrapper>
      {message}
      <VscError />
    </Wrapper>
  );
};
