import styled from "styled-components";
// import Photopages from "./Containers/Photopages";
import Main from "./Containers/Main";

const Div = styled.div`
  // height: 100vw;
  // width: 100vw;
  padding: 0px;
  margin: 0px;
  overflow-x: none;
  overflow-y: none;
  position: relative;
`

function App() {

  return (
    <Div>
      <Main/>
    </Div>
  );
}

export default App;
