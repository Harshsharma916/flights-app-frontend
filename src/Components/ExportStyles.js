import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(#318ce7, #00308f);
  
  .BgImg {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: blur(2px);
  }
`;

export const Button = styled.div`
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  background: #0cafff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: center;

  &:hover {
    cursor: pointer;
    transform: scale(${(props)=> props.scale});
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Text = styled.p`
  margin: 0px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  color: ${(props) => props.color};
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
