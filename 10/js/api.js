
import{showAlert,showSuccess} from "./utils.js";
import{BASE_URL} from "./constants.js";

const Route = {
  GET_DATA: "/data",
  SEND_DATA: "",
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
  } else {
    showAlert();
  }
}).catch(() => {
  showAlert();
});

export {getData, sendData};
