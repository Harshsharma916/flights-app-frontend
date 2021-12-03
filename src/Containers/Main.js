import Photopage1 from "./Photopage1";
import Photopage2 from "./Photopage2";
import Photopage3 from "./Photopage3";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import  Otp  from "./Otp";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp/>} />
      <Route path="/page1" element={<Photopage1 />} />
      <Route path="/page2" element={<Photopage2 />} />
      <Route path="/page3" element={<Photopage3 />} />
    </Routes>
  );
};

export default Main;
