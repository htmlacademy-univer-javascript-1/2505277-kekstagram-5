
const body = document.body;
const uploadImg = document.querySelector(".img-upload__overlay");
const uploadButton = document.querySelector(".img-upload__input");
const closeEditorButton = document.querySelector(".img-upload__cancel");
const uploadForm = document.querySelector(".img-upload__form");
const commentInput = uploadForm.querySelector(".text__hashtags");

function displayPhotoEditPreview(){

  const imgUplodPreview = document.querySelector(".img-upload__preview");
  const uploadImages = imgUplodPreview.querySelector("img");

  uploadButton.addEventListener("input", ()=>{
    const file = uploadButton.files[0];
    const reader = new FileReader();

    closeEditorButton.addEventListener("click",closeImageEditor);
    document.addEventListener("keydown", closeImageEditorByKey);

    reader.addEventListener("load",() => {
      uploadImages.src = reader.result;
    },
    false);

    if (file) {
      reader.readAsDataURL(file);
    }

    uploadImg.classList.remove("hidden");
    body.classList.add("modal-open");

    formValidation();
  });
}

function closeImageEditor(){
  uploadImg.classList.add("hidden");
  body.classList.remove("modal-open");
  uploadButton.value = "";
  closeEditorButton.removeEventListener("click",closeImageEditor);
  document.removeEventListener("keydown", closeImageEditorByKey);

}

function closeImageEditorByKey(evt){
  if (evt.key === "Escape") {
    closeImageEditor();
  }
}

function formValidation(){


  const pristine = new Pristine(uploadForm, {
    classTo: "img-upload__field-wrapper",
    errorClass: "img-upload__field-wrapper--valid",
    successClass: "img-upload__field-wrapper--invalid",
    errorTextParent: "img-upload__field-wrapper",
    errorTextTag: "span",
    errorTextClass: "form-error"
  });


  function validateComments (value) {
    return value.length <= 140;
  }

  pristine.addValidator(
    uploadForm.querySelector(".text__description"),
    validateComments,
    "Комментарий должен содержать не более 140 символов"
  );

  function validateHashtags () {
    return checkHashtagPresence() && verifyHashtagUniqueness();
  }


  /**
 * Проверяет, содержит ли каждый элемент массива хэштег.
 *
 * @returns {boolean} - true, если все элементы массива имеют символ хэштега в начале,
 *                      иначе false.
 */
  function checkHashtagPresence () {

    const arr = commentInput.value.trim().split(" ");

    return arr.every((elem) => elem[0] === "#" && elem.lastIndexOf("#") === 0);
  }

  function verifyHashtagUniqueness () {
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

  function getErrorMessage () {
    if(!checkHashtagPresence()){
      return "Каждый хэштэг должен начинаться с символа '#'. Хэштэги должен разделять пробел.";
    }else if(!verifyHashtagUniqueness()) {
      return "Навание каждого хэштега должно быть уникальным при условии нечувствительности к регистру.";
    }else{
      return "Навание каждого хэштега должно быть уникальным при условии нечувствительности к регистру.Каждый хэштэг должен начинаться с символа '#'.";
    }
  }

  pristine.addValidator(commentInput, validateHashtags, getErrorMessage);

  uploadForm.onsubmit = function(evt) {
    evt.preventDefault();
    pristine.validate();
  };
}
export{displayPhotoEditPreview};
