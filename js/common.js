let num = 266219;
const lengthOfNum = num.toString().length;

let numOfNun;
let des = 1;

let compliteNum = 1;

let result;

for (let i = 0; i < lengthOfNum; i++) {
  numOfIndex = Math.floor((num / des) % 10);
  compliteNum *= numOfIndex;

  des *= 10;
}

compliteNum **= 3;

let compliteNumStr = compliteNum.toString();
let compliteNumLen = compliteNumStr.length;
result = compliteNumStr.slice(compliteNumLen - compliteNumLen, 2);

alert(result);
