import {createPhotoParametrsArray} from "./photo-data-generator.js";

function creatingMiniatures(){
  const photoDescriptionArray = createPhotoParametrsArray();
  const pictures = document.querySelector(".pictures");
  const templateFragment = document.querySelector("#picture").content;
  const template = templateFragment.querySelector("a");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < photoDescriptionArray.length; i++) {
    const CURRENT_ELEMENT = photoDescriptionArray[i];
    const element = template.cloneNode(true);
    const image = element.querySelector(".picture__img");
    image.src = CURRENT_ELEMENT.url;
    image.alt = CURRENT_ELEMENT.description;

    element.querySelector(".picture__comments").textContent = CURRENT_ELEMENT.comments.length;
    element.querySelector(".picture__likes").textContent = CURRENT_ELEMENT.likes;

    fragment.appendChild(element);
  }

  pictures.appendChild(fragment);
  return pictures;
}

export {creatingMiniatures};
