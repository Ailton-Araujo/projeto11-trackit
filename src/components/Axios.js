import axios from "axios";

function tokenProvider(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function loginPost(obj, callBackSucess, callBackError) {
  axios
    .post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      obj
    )
    .then(({ data }) => callBackSucess(data))
    .catch((error) => {
      console.log(error);
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
      console.log(error);
      alert(error.response.data.message);
      callBackError();
    });
}

export function getTodayHabits(token, callBackSucess) {
  axios
    .get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      tokenProvider(token)
    )
    .then((res) => {
      callBackSucess([...res.data]);
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    });
}

export function getHabits(token, callBackSucess) {
  axios
    .get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      tokenProvider(token)
    )
    .then((res) => callBackSucess([...res.data]))
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    });
}

export function postHabit(obj, token, callBackSucess, callBackError) {
  axios
    .post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      obj,
      tokenProvider(token)
    )
    .then((res) => callBackSucess(res.data))
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
      callBackError((prevState) => !prevState);
    });
}

export function deleteHabit(idHabit, token, callBackSucess) {
  axios
    .delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}`,
      tokenProvider(token)
    )
    .then(() => callBackSucess())
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    });
}

export function statusTodayHabit(idHabit, status, token, callBackSucess) {
  axios
    .post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}/${
        status === false ? "check" : "uncheck"
      }`,
      "null",
      tokenProvider(token)
    )
    .then((res) => {
      console.log(res);
      callBackSucess();
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    });
}

export function getHistoryHabits(token, callBackSucess) {
  axios
    .get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
      tokenProvider(token)
    )
    .then((res) => callBackSucess(res.data))
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    });
}
