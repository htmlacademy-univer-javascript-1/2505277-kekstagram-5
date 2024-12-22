import {body} from "./constants.js";

const uploadImg = document.querySelector(".img-upload__overlay");
const uploadButton = document.querySelector(".img-upload__input");
const closeEditorButton = document.querySelector(".img-upload__cancel");
const uploadForm = document.querySelector(".img-upload__form");
const imgDescription = document.querySelector(".text__description");
const hashtagInp = document.querySelector(".text__hashtags");


function sendImageToServer(){
  closeEditorButton.removeEventListener("click",closeImageEditor);
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
    false,);

    if (file) {
      reader.readAsDataURL(file);
    }

    uploadImg.classList.remove("hidden");
    body.classList.add("modal-open");
    // uploadForm.onsubmit = function(evt) {
    //   // Проверяем введённое значение на соответствие
    //   if (hashtagInp.value !== 'Кекс') {
    //     // Если значение не подходит, отменяем автоматическую отправку формы
    //     evt.preventDefault();
    //     // И выводим предупреждение в консоль
    //     console.log('Вы не Кекс!');
    //   }
    // };
    formValidation();
    // hashtagInp.addEventListener("input", ()=>{

    //   console.log(hashtagInp.value);
    // });
    // console.log(imgDescription.value);
  });
}

function closeImageEditor(){
  uploadImg.classList.add("hidden");
  body.classList.remove("modal-open");
  document.removeEventListener("keydown", closeImageEditorByKey);
  // uploadButton.removeEventListener("click",openImageEditor);
  // closeEditorButton.removeEventListener("click",closeImageEditor);
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


  function validateComm (value) {
    return value.length <= 140;
    // console.log(imgDescription.value.length);
  }

  pristine.addValidator(
    uploadForm.querySelector(".text__description"),
    validateComm,
    "Комментарий должен содержать не более 140 символов"
  );


  uploadForm.onsubmit = function(evt) {
    evt.preventDefault();
    pristine.validate();
  };
}
export{sendImageToServer};
