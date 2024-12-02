
const descriptions = [
  "Солнечный закат и влюбленные в него",
  "Доброе утро из рая",
  "Когда жизнь дает цитрины, делайте лимонад",
  "Городские огни и бесконечные ночи",
  "Тропическое настроение",
  "Песочные ноги и загорелые носы",
  "Жизнь лучше в тапочках",
  "Минутка спокойствия в суматохе",
  "Полдень солнца",
  "Морское приключение",
  "Утро с кофе, книгами и пуфиком",
  "Приключения ждут снаружи",
  "Солнце, море и пачка картошки фри",
  "Смех - лучший медицинский препарат",
  "Только хорошие волны",
  "Утренняя заря",
  "Теплое свечение вечера",
  "Солнце в волосах",
  "Горячие напитки и холодные зимние вечера",
  "Рассказы из океана",
  "В поисках приключений",
  "Солнечные улыбки",
  "Теплые ночи и теплые огни",
  "Мечты в горах",
  "Жизнь - пляж, и еще что-то",
  "Кусочек неба на земле",
  "Городские улицы и городской бит",
  "Душа дикой цветочной",
  "Сохраняя момент",
  "Куда заведет тебя дорога",
  "Свобода в ветре",
  "Капля цвета в сером мире",
  "Кофе и страсть к путешествиям",
  "Ненаписанные истории и нерассказанные сказки",
];
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const MESSAGE_FOR_COMMENTS = [
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
const MAX_LENGTH_MESSAGE = 2;
const MAX_NUM_PHOTOS = 6;
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
      commentaries[i].message += MESSAGE_FOR_COMMENTS[randomNum(0,MESSAGE_FOR_COMMENTS.length - 1)];
    }
  }

  return commentaries;
}


function createPhotoParametrsArray() {
  const USERS_ARRAY = [];
  const USERS_ARRAY_LENGTH = 25;
  for (let i = 1; i <= USERS_ARRAY_LENGTH ; i++) {
    USERS_ARRAY.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `${descriptions[randomNum(0, USERS_ARRAY_LENGTH)]}`,
      likes: randomNum(15, 200),
      comments: createCommentsArray(),
    });
  }
  return USERS_ARRAY;
}

console.log(createPhotoParametrsArray());
