import{USERS_ARRAY_LENGTH,descriptions} from "./constants.js";
import{randomNum} from "./utils.js";
import{createCommentsArray} from "./comment-generator.js";
function createPhotoParametrsArray() {
  const usersArray = [];
  for (let i = 1; i <= USERS_ARRAY_LENGTH ; i++) {
    usersArray.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `${descriptions[randomNum(0, USERS_ARRAY_LENGTH)]}`,
      likes: randomNum(15, 200),
      comments: createCommentsArray(),
    });
  }
  return usersArray;
}
export {createPhotoParametrsArray};
