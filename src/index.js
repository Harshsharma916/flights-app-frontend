import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./redux/reducer";
// import reducer,{initialState} from "./Containers/reducer";
import "./Assets/fonts/blackpine-font/Blackpine-4BEVW.ttf";

// const persistedState = localStorage.getItem("reduxState")
//   ? JSON.parse(localStorage.getItem("reduxState"))
//   : initialState;

// const store = createStore(
//   reducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <HashRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </HashRouter>
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById("root")
);

