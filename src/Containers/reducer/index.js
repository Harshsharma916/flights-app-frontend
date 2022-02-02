export const initialState = {
  data: [],
  otpData: [],
  userDetails: [],
  flightCards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "call":
    //   return {
    //     ...state,
    //     call: action.data,
    //   };
    // case "page1":
    //   return {
    //     data: action.data,
    //   };
    // case "page2":
    //   return {
    //     data: action.data,
    //   };
    // case "page3":
    //   return {
    //     data: action.data,
    //   };
    // case "endpage":
    //   return {
    //     data: action.data,
    //   };
    case "otpData":
      return {
        ...state,
        otpData: action.data,
      };
    case "userDetails":
      return {
        ...state,
        userDetails: action.data,
      };
    case "logout":
      return initialState;
    case "FlightCards":
      return {
        ...state,
        flightCards: action.data,
      };
    // case "clear":
    //   return {
    //     ...state,
    //     initialState,
    //   };
    default:
      return state;
  }
};

export default reducer;
