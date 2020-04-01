//Сложное задание к четвертому уроку
"use strict";

let strInput = prompt("Введите строку и посмотрите в консоль");

let strFunc = argument => {
  let type = +argument * 10;

  let str = "";

  if (!isNaN(type)) {
    console.log(
      "Вы уверены, что написали предложение? Это больше похоже на число. Читайте внимательно)"
    );
  } else {
    str = argument.trim();
    let subStr = "";

    if (str.length > 30) {
      subStr = str.substr(0, 30) + " ...";
      console.log(subStr);
    } else {
      console.log(str);
    }
  }
};

strFunc(strInput);
