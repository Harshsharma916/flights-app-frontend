import { memo } from "react";
import styled from "styled-components";
import Cardbg from "../../Images/4.png";
import { Text } from "../ExportStyles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f3f4;
  border-radius: 10px;

  .Image-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    padding-bottom: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    .Image {
      width: 350px;
      height: auto;
      object-fit: contain;
      padding: 10px;
      background: white;
    }

    .Route {
      display: flex;
      margin: 20px 0px;
      gap: 10px;

      .hr {
        color: white;
        width: 20px;
        height: 5px;
        background: white;
        border: none;
      }
    }
  }

  .Data {
    display: flex;
    padding: 30px 30px;
    justify-content: space-between;
    background: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .DateandPrice {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .Labels {
        display: flex;
        gap: 10px;
      }
    }
    .Checkout {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`;

const PriceText = styled.p`
  margin: 0px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  background: -webkit-linear-gradient(left, #0cafff, #00308f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonOne = styled.button`
  padding: 5px 20px;
  color: white;
  background: #0cf;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  font-family: Sans-serif;
  // font-style: italic;
`;

const FlightCard = ({flightCard}) => {

  return (
    <Wrapper>
      <div className="Image-div">
        <img src={flightCard?.imgSrc} className="Image" />
        <div className="Route">
          <hr className="hr" />
          <Text weight="400" size="20px" style={{ letterSpacing: "5px" }}>
            {flightCard?.route?.from?.toUpperCase()}
          </Text>
          <Text weight="500" size="20px" family="'Dancing Script', cursive">
            -TO-
          </Text>
          <Text weight="400" size="20px" style={{ letterSpacing: "5px" }}>
            {flightCard?.route?.to?.toUpperCase()}
          </Text>
          <hr className="hr" />
        </div>
      </div>
      <div className="Data">
        <div className="DateandPrice">
          <div className="Labels">
            <Text size="18px" weight="500">
              Date:
            </Text>
            <Text>{flightCard?.date}</Text>
          </div>
          <div className="Labels">
            <Text size="18px" weight="500">
              Time:
            </Text>
            <Text>{flightCard?.time}</Text>
          </div>
          <div className="Labels">
            <Text size="18px" weight="500">
              Price:
            </Text>
            <PriceText weight="600">₹{flightCard?.price}</PriceText>
          </div>
        </div>
        <div className="Checkout">
          <Text
            size="17px"
            style={{ fontStyle: "italic" }}
            family="'Dancing Script', cursive"
          >
            fly away -{">"}
          </Text>
          <ButtonOne>Les' Go</ButtonOne>
        </div>
      </div>
    </Wrapper>
  );
};

export default memo(FlightCard);
