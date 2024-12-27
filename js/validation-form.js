import{showAlert} from "./utils.js";
import{sendData} from "./api.js";

const uploadForm = document.querySelector(".img-upload__form");
const submitButton = document.querySelector(".img-upload__submit");
const commentInput = uploadForm.querySelector(".text__hashtags");

function validateComments(value) {
  return value.length <= 140;
}

function validateHashtags() {
  return checkHashtagPresence() && verifyHashtagUniqueness();
}

/**
 * Проверяет, содержит ли каждый элемент массива хэштег.
 *
 * @returns {boolean} - true, если все элементы массива имеют символ хэштега в начале
 *                      и не содержат символ хэштега нигде кроме начала
 *                      или если длина значения инпута = 0,
 *                      иначе false.
 */
function checkHashtagPresence() {
  const arr = commentInput.value.trim().split(" ");

  return arr.every(
    (elem) =>
      commentInput.value.length === 0 ||
      (elem[0] === "#" && elem.lastIndexOf("#") === 0)
  );
}

/**
 * Проверяет, хэштеги на уникальность.
 *
 * @returns {boolean} - true, если все хэштеги уникальны
 *                      при условии нечувствительности к регистру,
 *                      иначе false.
 */
function verifyHashtagUniqueness() {
  const arr = commentInput.value.trim().split(" ");

  const result = arr.reduce((acc, item) => {
    item = item.toLowerCase();
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);
  return result.length === arr.length;
}

function getErrorMessage() {
  if (!checkHashtagPresence()) {
    return "Каждый хэштэг должен начинаться с символа '#'. Хэштэги должен разделять пробел.";
  } else if (!verifyHashtagUniqueness()) {
    return "Навание каждого хэштега должно быть уникальным при условии нечувствительности к регистру.";
  }
}
const pristine = new Pristine(uploadForm, {
  classTo: "img-upload__field-wrapper",
  errorClass: "img-upload__field-wrapper--valid",
  successClass: "img-upload__field-wrapper--invalid",
  errorTextParent: "img-upload__field-wrapper",
  errorTextTag: "span",
  errorTextClass: "form-error"
});
const SubmitButtonText = {
  IDLE: "опубликовать",
  SENDING: "публикую..."
};
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};
function formValidation(){

  pristine.addValidator(
    uploadForm.querySelector(".text__description"),
    validateComments,
    "Комментарий должен содержать не более 140 символов"
  );
  pristine.addValidator(commentInput, validateHashtags, getErrorMessage);
}

const setUserFormSubmit = (onSuccess) => {
  uploadForm.onsubmit = function (evt) {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          (err) => {
            showAlert(err);
          }
        )
        .finally(unblockSubmitButton);
    }

  };
};
export {formValidation,setUserFormSubmit};
