import axios from "axios";

export function loginPost(obj, callBackSucess, callBackError) {
  axios
    .post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      obj
    )
    .then((res) => callBackSucess(res.data))
    .catch((error) => {
      alert(error.response.data.message);
      callBackError();
    });
}

export function signUp(obj, callBackSucess, callBackError) {
  axios
    .post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      obj
    )
    .then(() => callBackSucess())
    .catch((error) => {
      alert(error.response.data.message);
      callBackError();
    });
}
