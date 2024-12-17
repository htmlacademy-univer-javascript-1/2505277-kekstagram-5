import {randomNum} from "./utils.js";
import {createCommentsArray} from "./comment-generator.js";


const body = document.body;
const pictureFullSize = document.querySelector(".big-picture");
function openBigPicture(url, description, comments, likes){
  const picture = document.querySelectorAll(".picture");
  //Находим див внутри которого большое изображение
  const bigPictureBlock = pictureFullSize.querySelector(".big-picture__img");
  //Находим само изображение
  const bigPictureImg = bigPictureBlock.querySelector("img");
  const likesCount = document.querySelector(".likes-count");
  const commentsCount = document.querySelector(".comments-count");
  const socialComments = document.querySelector(".social__comments");
  const bigPictureDescription = document.querySelector(".social__caption");
  const quantityComments = document.querySelector(".social__comment-count");
  const loaderComments = document.querySelector(".comments-loader");

  for(const pic of picture){
    pic.onclick = function(){
      body.classList.add("modal-open");
      pictureFullSize.classList.remove("hidden");
      quantityComments.classList.add("hidden");
      loaderComments.classList.add("hidden");
      bigPictureImg.src = url;
      likesCount.textContent = likes;
      commentsCount.textContent = comments.length;
      bigPictureDescription.textContent = description;
      socialComments.innerHTML = "";
      renderComments(comments);
    };
  }

}
function closeBigPicture(){
  const bigPictureCancel = document.querySelector(".big-picture__cancel");
  function closed(){
    body.classList.remove("modal-open");
    pictureFullSize.classList.add("hidden");
  }
  bigPictureCancel.addEventListener("click", closed);
  document.addEventListener('keydown', (evt)=> {
    if (evt.key === "Escape") {
      closed();
    }
  });
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

export {openBigPicture,closeBigPicture};
