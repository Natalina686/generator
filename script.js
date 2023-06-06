"use strict";

// task 2

function* generateRandomNumbers(max, quantity) {

    for (let i = 1; i <= quantity; i++) {
      let random = 1 + Math.random() * (max + 1 - 1);
      let randomNumber = Math.floor(random);
      yield randomNumber;
    }
  }
  
  let randomNumbers = [... generateRandomNumbers(100, 10)]
  console.log(randomNumbers)