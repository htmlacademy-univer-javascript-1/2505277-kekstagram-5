import {createPhotoParametrsArray} from "./photo-data-generator.js";
import{USERS_ARRAY_LENGTH} from "./constants.js";

const usersArray = createPhotoParametrsArray();

const pictures = document.querySelectorAll(".pictures");
const templateFragment = document.querySelector("#picture").content;

const template = templateFragment.querySelector("a");
const fragment = document.createDocumentFragment();


for (let i = 0; i < USERS_ARRAY_LENGTH; i++) {
  const element = template.cloneNode(true);

  element.querySelector(".picture__img").src = usersArray[i].url;
  element.querySelector(".picture__img").alt = usersArray[i].description;

  element.querySelector(".picture__comments").textContent = usersArray[i].comments.length;
  element.querySelector(".picture__likes").textContent = usersArray[i].description.length;

  fragment.appendChild(element);

}

pictures[0].appendChild(fragment);

