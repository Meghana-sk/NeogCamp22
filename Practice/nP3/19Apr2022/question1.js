//Write a program to abbreviate every word which are more than 5 letters in length, in a sentence. You can achieve this by counting the length in between the first and last letter of each word and then putting them in between.

const input = 'You should know about accessibility and javascript amanjain';

const abbreviatedResult = input.split(' ').map(word =>
  word.length >5 ? word.slice(0,1) + (word.length -2).toString() + word.slice(word.length-1,) : word
).join(' ');

console.log(abbreviatedResult)

// New Solution

let abbreviatedResult2='';
let newStr ='';

for(a of input){
  if(a ===' '){
    abbreviatedResult2+= newStr.length>5 ? newStr.slice(0,1) + (newStr.length -2).toString() + newStr.slice(newStr.length-1,) : newStr;
    abbreviatedResult2+= ' ';
    newStr='';
    continue;
  }
  newStr +=a;
}

newStr = newStr.length>5 ? newStr.slice(0,1) + (newStr.length -2).toString() + newStr.slice(newStr.length-1,) : newStr

console.log(abbreviatedResult2 + newStr)



