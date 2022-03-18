import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import profileimg from "../../Assets/Images/profileimg.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;

  .cont {
    display: flex;
    flex-direction: column;
  }
  .cont1 {
    display: flex;
    padding: 12px;
  }
  .text2 {
    margin: 0px;
    font-size: 20px;
    weight: 500;
  }
  .img1 {
    margin-right: 20px;
  }
`;
const Profilediv = styled.div`
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;

  .profiledata {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  .text {
    margin: 0px;
    font-size: 30px;
    font-weight: 700;
  }

  .text1 {
    margin: 0px;
    font-size: 22px;
    line-height: 150%;
    font-weight: 100;
  }
  .img0{
    width: 100px;
    // heigth: 50px;
  }
`;

const Profile = () => {
  const userProfile = useSelector((state) => state?.userProfile);
  const otpData = useSelector((state) => state?.otpData);
const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile == null || otpData == null) {
      navigate("/");
    }
  }, [userProfile,otpData]);

  const buttons = [
    { id: 0, name: "Refer and Earn" },
    { id: 1, name: "Order FlamCard" },
    { id: 2, name: "My Orders" },
    { id: 3, name: "My Instant FlamCards" },
    { id: 4, name: "Show Scans" },
    { id: 5, name: "Help" },
    { id: 6, name: "Rate Us" },
    { id: 7, name: "Logout" },
  ];

  function onclick(message) {
      console.log(message)
    if (window.vuplex) {
      send();
    } else {
      window.addEventListener("vuplexready", send);
    }

    function send() {
      window.vuplex.postMessage({
        type: "Profile",
        message: message,
      });
    }
    if(message=='Logout'){
        dispatch({type:'Logout'})
    }
  }

  return (
    <Wrapper>
      <Profilediv>
        <div className="profiledata">
          <p className="text">
            <span className="text">Hi, </span> {userProfile?.userData?.name}
          </p>
          <p className="text1">+91 {otpData?.phoneNumber}</p>
        </div>
        <img className='img0' src={profileimg} />
      </Profilediv>
      <div className="cont">
        {buttons.map((item, key) => {
          return (
            <div className="cont1" key={key} onClick={() => onclick(item.name)}>
              {/* <img className="img1" src={item.img} /> */}
              <p className="text2">{item.name}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Profile;
