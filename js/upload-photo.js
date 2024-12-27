import{formValidation} from "./validation-form.js";

const body = document.body;
const uploadImg = document.querySelector(".img-upload__overlay");
const uploadButton = document.querySelector(".img-upload__input");
const closeEditorButton = document.querySelector(".img-upload__cancel");
const effectsPreviews = document.querySelectorAll(".effects__preview");

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
      effectsPreviews.forEach((preview) => {
        preview.style.backgroundImage = `url("${reader.result}")`;
      });
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


export {displayPhotoEditPreview,closeImageEditor};
