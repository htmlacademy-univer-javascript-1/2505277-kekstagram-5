

const body = document.body;
const commentList = document.querySelector(".social__comments");
const pictureFullSize = document.querySelector(".big-picture");
const bigPictureCancel = document.querySelector(".big-picture__cancel");
<<<<<<< HEAD
const quantityComments = document.querySelector(".social__comment-count");
const loaderComments = document.querySelector(".social__comments-loader");
let currentIndex = 0;
const DEFAULT_COMMENT_LIMIT = 5;
let storeComments = [];

function openBigPicture(url, description, comments, likes){
  // const picture = document.querySelectorAll(".picture");

  const bigPictureImg = pictureFullSize.querySelector(".big-picture__img img");
  const bigPictureLikesCount = document.querySelector(".likes-count");
  const bigPictureCommentsCount = document.querySelector(".comments-count");

  const bigPictureDescription = document.querySelector(".social__caption");

  commentList.innerHTML = "";

  bigPictureImg.src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureDescription.textContent = description;
=======

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
>>>>>>> master

  body.classList.add("modal-open");
  pictureFullSize.classList.remove("hidden");


  storeComments = comments;
  displayMoreComments();
  bigPictureCancel.addEventListener("click", closeBigPicture);
  document.addEventListener("keydown", closeBigPictureByKey);

  loaderComments.addEventListener("click", displayMoreComments);
}
function closeBigPicture(){
  body.classList.remove("modal-open");
  pictureFullSize.classList.add("hidden");
  // После закрытия фотографии обнуляем текущий индекс чтобы не было проблем с показом комментариев у других фотографий
  currentIndex = 0;

  loaderComments.removeEventListener("click", displayMoreComments);
  bigPictureCancel.removeEventListener("click", closeBigPicture);
  document.removeEventListener("keydown", closeBigPictureByKey);
}
function closeBigPictureByKey(evt){
  if (evt.key === "Escape") {
    closeBigPicture();
  }
}

function renderComments(comments){
  const li = document.createElement("li");
  li.classList.add("social__comment");
  li.innerHTML = `
        <img class="social__picture" src="${comments.avatar}" alt="${comments.name}" width="35" height="35">
        <p class="social__text">${comments.message}</p>
      `;
  commentList.appendChild(li);
}


function displayMoreComments() {
  function renderNextComments(){
    const nextComments = storeComments.slice(currentIndex,currentIndex + DEFAULT_COMMENT_LIMIT);
    nextComments.forEach((comm) => {
      renderComments(comm);
    });
    currentIndex += nextComments.length;
    refreshCommentStats();
    checkAllCommentsDisplayed();
  }

  loaderComments.classList.remove("hidden");
  renderNextComments();
}

function checkAllCommentsDisplayed (){
  if(currentIndex >= storeComments.length){
    loaderComments.classList.add("hidden");
  }
}
function refreshCommentStats(){
  quantityComments.innerHTML = `${currentIndex} из <span class="comments-count">${storeComments.length}</span> комментариев`;
}
export {openBigPicture,displayMoreComments};
