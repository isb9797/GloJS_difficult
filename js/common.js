//Сложное задание к пятому уроку
"use strict";

function arrayWork() {
  const arrMehods = {
    //Можно вводить и вручную, но я решил, что так быстрее)
    arr: ["1", "2", "3", "4", "5", "6", "7", "43", "81", "83"],

    arraySlice: function () {
      let sliceArrItem;

      for (let i in this.arr) {
        sliceArrItem = this.arr[i];
        sliceArrItem = +sliceArrItem.slice(0, 1);

        if (sliceArrItem === 2 || sliceArrItem === 4) {
          console.log(this.arr[i]);
        }
      }
    },
    arrayNatural: function () {
      let arrNat;

      for (let num = 0; num <= 100; num++) {
        // arrNat = +this.arr[i];

        nextPrime: for (let j = 2; j <= num; j++) {
          for (let k = 2; k < num; k++) {
            if (j % k === 0) {
              continue nextPrime;
            }
          }
          console.log(num + ":    " + "Делители: " + j + ", " + 1);
        }
      }
    },
  };

  //Вывод числел, начинающихся с 2 и 4
  arrMehods.arraySlice();

  console.log("Простые числа");

  arrMehods.arrayNatural();
}

arrayWork();
