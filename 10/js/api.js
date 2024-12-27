
import{showAlert,showSuccess} from "./utils.js";

const BASE_URL = "https://29.javascript.htmlacademy.pro/kekstagram";
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '',
};

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => response.json());


const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: "POST",
    body,
  },
) .then((response) => {
  if (response.ok) {
    showSuccess();
    // document.removeEventListener("keydown", closeByKey);
    // successButton.addEventListener("click", closeMessageWindow);
  } else {
    showAlert();
    // document.removeEventListener("keydown", closeByKey);
    // tryButton.addEventListener("click", closeMessageWindow);
  }
}).catch(() => {
  showAlert();
});

export {getData, sendData};
