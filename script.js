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

const screen = document.querySelector('.screen');

function posting(value) {
  let el = `${value}`.toLowerCase();
  return screen.insertAdjacentHTML('beforeend',`<p class="${el}"> ${value} </p>`);
};

// iterator

let range = {
  from: 1,
  to: 100
}

range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;

  return {
    next() {
      if (current <= last) {
        let result = {
          done: false,
          value: ''
        }
        
        if (current % 3 === 0 && current % 15 !== 0) {
          result.value = 'Fizz';

        } else if (current % 5 === 0 && current % 15 !== 0) {
          result.value = 'Buzz';

        } else if (current % 15 === 0) {
          result.value = 'FizzBuzz';

        } else {
          result.value = current;
        }
        current++;
        return result;
      } else {
        return {
          done: true
        }
      }
    }
  }
};

for (let value of range) {
  posting(value);
}






// generator
// let numbersFromGenerator = generator(1, 100);
// for (let number of numbersFromGenerator) {
//   posting(number)
// }

// function* generator(start, end) {

//   for (let i = start; i <= end; i++) {

//     if (i % 3 === 0 && i % 15 !== 0) {
//       yield 'Fizz';

//     }else if (i % 5 === 0 && i % 15 !== 0) {

//       yield 'Buzz';
  
//     }else if (i % 15 === 0) {

//       yield 'FizzBuzz';

//     } else {

//       yield i;
//     }
    
//   }

// }





