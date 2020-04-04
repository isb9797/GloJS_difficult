//Сложное задание к седьмому уроку
"use strict";

function week() {
  const outWeek = {
    week: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
    allDaysInStr: function () {
      let weekInc = this.week + "";
      let splitWeekDays = weekInc.split(" ") + "";
      //Использовал регулярное выражение для глобального поиска по стороке
      splitWeekDays = splitWeekDays.replace(/,/g, " ");
      return splitWeekDays;
    },
    allDaysInColumn: function () {
      let newDays = [];
      newDays = this.week.slice();

      newDays[5] = "<i>" + "Суббота" + "</i>";
      newDays[6] = "<i>" + "Воскресенье" + "</i>";

      //let sunItalic = newDays.pop('Суббота')

      for (let Day of newDays) {
        console.log(Day);
      }
    },
    getToDay: function () {
      //Тут подвох - неделя начинается с воскрессенья)
      let newDays = [];
      newDays = this.week.slice();

      newDays.splice(6, 1); //Удаляем воскресенье с конца ...
      newDays.unshift("Воскресенье"); //... и ставим в начало

      let date = new Date();
      let n = date.getDay();
      console.log("Сегодня: \n");
      console.log("<b>" + newDays[n] + "</b>");
    },
  };

  console.log(outWeek.allDaysInStr() + "\n");

  outWeek.allDaysInColumn();

  outWeek.getToDay();
}

week();
