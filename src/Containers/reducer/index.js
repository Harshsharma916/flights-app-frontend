const initialState = {
  data: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
