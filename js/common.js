//Сложное задание к третьему уроку
let lang = "en";

let rusDays = [
  " Понедельник",
  " Вторник",
  " Среда",
  " Четверг",
  " Пятница",
  " Суббота",
  " Воскрессенье"
];

let englishDays = [
  " Monday",
  " Thursday",
  " Wedneday",
  " Thersday",
  " Friday",
  " Saturday",
  " Sunday"
];

//Через IF

if (lang === "ru") {
  console.log("Способ первый: " + rusDays);
} else if (lang === "en") {
  console.log("Способ первый: " + englishDays);
} else {
  console.log("Способ первый: " + "Вы явно ошиблись страной");
}

//Через SWITCH

switch (lang) {
  case "ru":
    console.log("Способ Второй: " + rusDays);
    break;
  case "en":
    console.log("Способ Второй: " + englishDays);
    break;
  default:
    console.log("Способ второй: " + "Вы явно ошиблись страной");
}

//Массив

let langArr = [];
langArr["ru"] = rusDays;
langArr["en"] = englishDays;

console.log("Способ третий " + langArr[lang]);


//Артем и Макс

let namePerson = "Максим";

namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Максим"
  ? console.log("преподаватель")
  : console.log("студент");
