

const body = document.body;
const pictureFullSize = document.querySelector(".big-picture");
const bigPictureCancel = document.querySelector(".big-picture__cancel");

function openBigPicture(url, description, comments, likes){
  // const picture = document.querySelectorAll(".picture");

  const bigPictureImg = pictureFullSize.querySelector(".big-picture__img img");
  const bigPictureLikesCount = document.querySelector(".likes-count");
  const bigPictureCommentsCount = document.querySelector(".comments-count");

  const bigPictureDescription = document.querySelector(".social__caption");

  const quantityComments = document.querySelector(".social__comment-count");
  const loaderComments = document.querySelector(".social__comments-loader");

  bigPictureImg.src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureDescription.textContent = description;

  body.classList.add("modal-open");
  pictureFullSize.classList.remove("hidden");
  quantityComments.classList.add("hidden");
  loaderComments.classList.add("hidden");

  renderComments(comments);
  bigPictureCancel.addEventListener("click", closeBigPicture);
  document.addEventListener('keydown', closeBigPictureByKey);

}
function closeBigPicture(){
  body.classList.remove("modal-open");
  pictureFullSize.classList.add("hidden");

  bigPictureCancel.removeEventListener("click", closeBigPicture);
  document.addEventListener('keydown', closeBigPictureByKey);
}
function closeBigPictureByKey(evt){
  if (evt.key === "Escape") {
    closeBigPicture();
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

export {openBigPicture,closeBigPicture};
