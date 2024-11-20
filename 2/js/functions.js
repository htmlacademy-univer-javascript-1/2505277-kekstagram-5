// eslint-disable-next-line no-unused-vars
function lengthString(string,length){
  return string.length < length;
}

// eslint-disable-next-line no-unused-vars
function isPalindrome(word){
  word = word.toLowerCase().replaceAll(' ', '');
  const firstHalf = word.slice(0,Math.floor(word.length / 2) + 1);
  const secondHalf = word.slice(Math.floor(word.length / 2),word.length);
  return firstHalf === secondHalf.split('').reverse().join('');
}

// eslint-disable-next-line no-unused-vars
function isNum(string){

  return parseInt (string.match(/\d+/));
}
