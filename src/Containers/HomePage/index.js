import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import FlightCards, { Text } from "../../Components/FlightCards";
import { memo, useState,useEffect } from "react";
import "./test.scss";
import BgImg from "../../Images/10.jpg";
// import Logo from "../../Images/logo.jpg";
// import User from "../../Images/User.png";
import { useDispatch, useSelector } from "react-redux";
import { AxiosGet } from "../../Components/Apicaller";
import { Wrapper,Body } from "../../Components/ExportStyles";
import LogoHeader from "../../Components/LogoHeader";

const Header = styled.div`
  display: flex;
  gap: 10px;
  // align-item: center;
  justify-content: center;
  margin-top: 10px;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .Arrow {
    padding: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
  }

  .Arrow:hover {
    color: #00308f;
  }
`;

const HomePage = () => {

  const dispatch = useDispatch();
  const flightCards = useSelector((state) => state.flightCards);
  const userDetails = useSelector((state) => state.userDetails);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Low-to-High");
  const [journeyfrom, setJourneyFrom] = useState("Delhi");
  const [journeyto, setJourneyTo] = useState("Bangalore");
  const [card, changeCardCount] = useState(0);

  useEffect(() => {
    getAllCards();
  }, [category,sort,journeyfrom,journeyto]);

  async function getAllCards() {
    let flightsInfo = {};
    if (category == "All" && sort == "Low-to-High") {
      flightsInfo = await AxiosGet("/flights?sort=low");
    }else if(category == "All" && sort == "High-to-Low"){
      flightsInfo = await AxiosGet("/flights?sort=high")
    }

    dispatch({ type: "FlightCards", data: flightsInfo.data });
    return flightsInfo.data;
  }

  const Options = [
    {
      id: 0,
      name: "Category",
      subOptions: ["All", "Army", "Christmas", "Newyear"],
    },
    {
      id: 1,
      name: "Sort",
      subOptions: ["Low-to-High", "High-to-Low", "Earliest"],
    },
    {
      id: 2,
      name: "Journey",
      subOptions: {
        From: ["Delhi"],
        To: ["Bangalore", "Chennai", "Kolkata", "Chandigarh"],
      },
    },
  ];

  return (
    <Wrapper>
      <img src={BgImg} className="BgImg" />
      <LogoHeader showLogoutButton={true} userName={userDetails[0]?.name}/>
      <Header>
        {Options.map((item, key) => {
          if (item.id == 2) {
            return (
              <div key={key} className="Dropdown">
                <div className="Dropdown-heading">
                  <p className="Heading-text">{item.name}</p>
                </div>
                <div className="Dropdown-div">
                  {Object.keys(item.subOptions).map((items, key) => {
                    return (
                      <div key={key} className="Dropdown-sections">
                        <p className="Sections-text">{Object.values(items)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div key={key} className="Dropdown">
                <p className="Dropdown-heading">{item.name}</p>
                <div className="Dropdown-div">
                  {item.subOptions.map((items, key) => {
                    return (
                      <div
                        key={key}
                        className="Dropdown-sections"
                        onClick={() => {
                          if (item.name == "Category") {
                            setCategory(items);
                          } else {
                            setSort(items);
                          }
                        }}
                      >
                        <p className="Sections-text">{items}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </Header>
      <Body>
        <CardBody>
          <FiArrowLeft
            className="Arrow"
            onClick={() =>
              changeCardCount((prev) => {
                if (prev == 0) {
                  return prev;
                } else {
                  return prev - 1;
                }
              })
            }
          />
          {(flightCards?.length != 0)?(<FlightCards
            value={card}
            dispatch={dispatch}
            flightCard={flightCards?.[card]}
          />):''}
          <FiArrowRight
            className="Arrow"
            onClick={() =>
              changeCardCount((prev) => {
                if (prev == 10) {
                  return prev;
                } else {
                  return prev + 1;
                }
              })
            }
          />
        </CardBody>
      </Body>
    </Wrapper>
  );
};

export default memo(HomePage);
