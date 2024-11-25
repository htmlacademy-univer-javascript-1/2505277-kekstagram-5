
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
  const replace = String(string).replace(/[^0-9]/g,"");
  if(replace.length >= 1){
    return Number(replace);
  }else{
    return NaN;
  }

}


console.log(extractNumbers('2023 год'));
console.log(extractNumbers('ECMAScript 2022'));
console.log(extractNumbers('1 кефир, 0.5 батона'));
console.log(extractNumbers('агент 007'));
console.log(extractNumbers('а я томат'));
console.log(extractNumbers(1));
console.log(extractNumbers(-1.2223));
console.log(extractNumbers(0));
console.log(extractNumbers('0'));


