function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const alertContainer = document.createElement("div");
const container = document.querySelector(".success__inner");

function closeMessageWindow(){
  alertContainer.remove();
}
function closeByKey(evt){
  if (evt.key === "Escape") {
    closeMessageWindow();
  }
}
const showAlert = () =>{
  document.addEventListener("keydown", closeByKey);
  const template = document.querySelector("#error");


  const item = template.content.cloneNode(true);
  const tryButton = item.querySelector(".error__button");
  alertContainer.append(item);

  document.body.append(alertContainer);
  tryButton.addEventListener("click", closeMessageWindow);
  document.addEventListener("mouseup", (e) => {
    if ((e.target)) {
      closeMessageWindow();
    }
  });
};

const showSuccess = () =>{

  const template = document.querySelector("#success");

  const item = template.content.cloneNode(true);
  const successButton = item.querySelector(".success__button");
  alertContainer.append(item);
  document.addEventListener("keydown", closeByKey);
  document.body.append(alertContainer);
  successButton.addEventListener("click", closeMessageWindow);

  document.addEventListener("mouseup", (e) => {
    if ((e.target)) {
      closeMessageWindow();
    }
  });
};


export {randomNum,showAlert,showSuccess};
