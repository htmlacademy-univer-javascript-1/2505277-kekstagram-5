
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
  if(typeof string === 'number') {
    if(!Number.isInteger(string)){
      return Math.abs(string * Math.pow(10,string.toString().match(/\.(\d+)/)?.[1].length));
    }
    return Math.abs(string);
  }else{
    const numbers = string.match(/\d+/g);
    return numbers.map(Number).join('') ;
  }
}

