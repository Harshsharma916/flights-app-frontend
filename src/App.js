import styled from "styled-components";
import LogoHeader from "./Components/Header";
import Main from "./Containers/Main";
import { useSelector } from "react-redux";

const Div = styled.div`
  padding: 0px;
  margin: 0px;
  overflow-x: none;
  overflow-y: none;
  position: relative;
`

function App() {
  const userDetails = useSelector((state) => state?.user?.userDetails);

  return (
    <Div>
      <LogoHeader showLogoutButton={true} userName={userDetails[0]?.name} showLoginButton={true}/>
      <Main/>
    </Div>
  );
}

export default App;
