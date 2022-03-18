import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Otp from "./Otp";
import Profile from "./Profile";
import HomePage from "./HomePage";
import UserDetails from "./UserDetails";

const Main = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/userdetails" element={<UserDetails/>} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Main;
