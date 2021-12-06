const initialState = {
  call: "false",
  data: "",
  otpData: [],
  userProfile: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "call":
      return {
        ...state,
        call: action.data,
      };
    case "page1":
      return {
        data: action.data,
      };
    case "page2":
      return {
        data: action.data,
      };
    case "page3":
      return {
        data: action.data,
      };
    case "endpage":
      return {
        data: action.data,
      };
    case "otpData":
      return {
        ...state,
        otpData: action.data,
      };
    case "userProfile":
      return {
        ...state,
        userProfile: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
