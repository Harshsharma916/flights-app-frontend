import { message } from "antd";
import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { sendOTPService, verifyOTPService } from '../../services/user-services';

// export function Apicall(url, datain, dispatch ){
//   console.log(url);
//   axios
//     .post(url, datain)
//     .then(function (response) {
//       console.log(response);
//       const { data, ok } = response;
//       console.log(data);

//       if (!data.error) {
//         console.log("INSIDE API");
//         // dispatch({ type: dispatchtype, data: data });
//         dispatch({ type: "call", data: "true" });
//         // navigate(page);
//       }
//     })
//     .catch(function (error) {
//       message.error(error);
//     });
// }

export async function AxiosGet(url) {
  const response = await axios.get(`http://localhost:5000${url}`);
  if (response) {
    return response;
  }
}

export async function AxiosPost(url,data){
  const response = await axios.post(`http://localhost:5000${url}`,data)
  if (response) {
    return response;
  }
}

export async function Apicall(url, data) {
  const response = await fetch(url, {
    method: data.method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data?.data ? data?.data : ""), // body data type must match "Content-Type" header
  });

  if (response) {
    return response.json();
  }
}
