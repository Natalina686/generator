"use strict";

// task 2

// function* generateRandomnumberbers(max, quantity) {

//     for (let i = 1; i <= quantity; i++) {
//       let random = 1 + Math.random() * (max + 1 - 1);
//       let randomnumberber = Math.floor(random);
//       yield randomnumberber;
//     }
//   }
  
//   let randomnumberbers = [... generateRandomnumberbers(100, 10)]
//   console.log(randomnumberbers)

// //   1 task

// const list = [];
// for (let i = 1; i <= 100; i++) {


// if (i % 15 === 0) {
//     list.push("FizzBuzz");
//     }

//     else if (i % 3 === 0) {
//         list.push("Fizz");
//         } else if (i % 5 === 0) {
//         list.push("Buzz");
//         }
//         else {
//             list.push(i);
//             }
//         }
//             console.log(list);

const screen = document.querySelector('.screen');

function calculating(numbers) {
  let result = [];

  for (let number of numbers) {

    if (number % 3 === 0 && number % 15 !== 0) {
        result.push(`<p class="fizz"> Fizz </p>`)

      } else if (number % 5 === 0 && number % 15 !== 0) {
        result.push(`<p class="buzz"> Buzz </p>`);

    } else if (number % 15 === 0) {
      result.push(`<p class="fizzbuzz"> FizzBuzz </p>`);

    } else {
      result.push(`<p> ${number} </p>`)
    }
  }

  screen.insertAdjacentHTML('beforeend',`${result}`);

};

// Iterator

// let range = {
//   from: 1,
//   to: 100
// }

// range[Symbol.iterator] = function() {

//   let current = this.from;
//   let last = this.to;

//   return {
//     next() {
//       if (current <= last) {
//         return {
//           done: false,
//           value: current++
//         };
//       } else {
//         return {
//           done: true
//         };
//       }
//     }
//   }
// };


// calculating(range);

// Generator

function* generator(start, end) {

  for (let i = start; i <= end; i++) {
    yield i;
  }

}

let numberbersFromGenerator = [...generator(1, 100)];

calculating(numberbersFromGenerator);