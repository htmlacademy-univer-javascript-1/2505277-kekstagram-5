
function lengthСomparison(sentence,length){
  return sentence.length <= length;
}


function isPalindrome(word){
  word = word.toLowerCase().replaceAll(' ', '');
  const firstHalf = word.slice(0,Math.floor(word.length / 2) + 1);
  const secondHalf = word.slice(Math.floor(word.length / 2),word.length);
  return firstHalf === secondHalf.split('').reverse().join('');
}


function extractNumbers(string){
  if(typeof string === 'string') {
    if(Number(string.replace(/[^0-9]/g,""))){
      return Number(string.replace(/[^0-9]/g,""));
    }else{
      return -1;
    }
  }else{
    return Number(String(string).replace(/[^0-9]/g,""));
  }
}
