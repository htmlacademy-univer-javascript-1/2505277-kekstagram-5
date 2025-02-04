import {openBigPicture} from "./rendering-fullsize-window.js";

const creatingMiniatures = (miniatures) =>{

  const pictures = document.querySelector(".pictures");
  const templateFragment = document.querySelector("#picture").content;
  const template = templateFragment.querySelector("a");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < miniatures.length; i++) {
    const {comments,likes,url,description} = miniatures[i];
    const element = template.cloneNode(true);
    const image = element.querySelector(".picture__img");
    image.src = url;
    image.alt = description;

    element.querySelector(".picture__comments").textContent = comments.length;
    element.querySelector(".picture__likes").textContent = likes;

    fragment.appendChild(element);
    element.addEventListener("click", (evt) =>{
      evt.preventDefault();

      openBigPicture(url, description, comments, likes);

    });
  }

  pictures.appendChild(fragment);
  return pictures;
};

export {creatingMiniatures};
