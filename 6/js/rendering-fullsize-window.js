import {randomNum} from "./utils.js";
import {createCommentsArray} from "./comment-generator.js";


function openBigPicture(){
  const picture = document.querySelectorAll(".picture");
  const pictureFullSize = document.querySelector(".big-picture");
  //Находим див внутри которого большое изображение
  const bigPictureBlock = pictureFullSize.querySelector(".big-picture__img");
  //Находим само изображение
  const bigPictureImg = bigPictureBlock.querySelector("img");
  const likesCount = document.querySelector(".likes-count");
  const socialComments = document.querySelector(".social__comments");

  for(const pic of picture){
    const pictureImg = pic.querySelector(".picture__img");
    const likes = pic.querySelector(".picture__likes");
    pic.onclick = function(){
      pictureFullSize.classList.remove("hidden");
      bigPictureImg.src = pictureImg.src;
      likesCount.textContent = likes.textContent;
      socialComments.innerHTML = "";
    };
  }

}

function renderComments(comments){
  const commentList = document.querySelector(".social__comments");
  commentList.innerHTML = "";

  comments.forEach((comment) =>{
    const li = document.createElement("li");
    li.classList.add("social__comment");
    li.innerHTML = `
        <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
        <p class="social__text">${comment.message}</p>
      `;
    commentList.appendChild(li);
  });

}

export {openBigPicture,renderComments};
