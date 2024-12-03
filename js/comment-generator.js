import{MAX_LENGTH_MESSAGE,MAX_NUM_PHOTOS,messageForComments,names} from "./constants.js";
import{randomNum} from "./utils.js";
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
export {createCommentsArray};
