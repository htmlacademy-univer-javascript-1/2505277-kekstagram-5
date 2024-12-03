import {randomNum} from "./random-num.js";
const MAX_LENGTH_MESSAGE = 2;
const MAX_NUM_PHOTOS = 6;
const messageForComments = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"

];
const names = [
  "Артем",
  "Виктор",
  "Петр",
  "Антонина",
  "Кирилл",
  "Валерия",
  "Настя",
  "Сеня",
  "Макс",
  "Егор",
  "Изольда",
];
function createCommentsArray() {
  const commentaries = [];
  for (let i = 0; i < randomNum(0, 30); i++) {
    commentaries.push({
      id: i,
      avatar: `img/avatar-${randomNum(1, MAX_NUM_PHOTOS)}.svg`,
      message: "",
      name: `${names[randomNum(0, names.length - 1)]}`,
    });
    for(let j = 0; j < randomNum(1, MAX_LENGTH_MESSAGE);j++){
      if(j >= 1){
        commentaries[i].message += "\n";
      }
      commentaries[i].message += messageForComments[randomNum(0,messageForComments.length - 1)];
    }
  }

  return commentaries;
}
export{createCommentsArray};
