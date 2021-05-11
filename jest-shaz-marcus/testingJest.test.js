// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// describe("tired", () => {
//   test('should returns "drink coffee" if you are tired and "keep working" if you are not tired ', () => {
//     expect(tired("tired")).toEqual("drink coffee");
//     expect(tired("not tired")).toEqual("keep working");
//   });
// });

// const tired = (str) => {
//   if (str === "tired") {
//     return `drink coffee`;
//   } else if (str === "not tired") {
//     return `keep working`;
//   }
// };

// Write the function that will make the test pass.
// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// describe("stressed", () => {
//   test('should returns "relax" if you are stressed and "keep going" if you are not stressed', () => {
//     expect(stressed("stressed")).toEqual("relax");
//     expect(stressed("not stressed")).toEqual("keep working");
//   });
// });

// const stressed = (str) => {
//   if (str === "stressed") {
//     return `relax`;
//   } else if (str === "not stressed") {
//     return `keep working`;
//   }
// };
// Write the function that will make the test pass.
// 3. Write the test for a function that returns "in budget" if a price is lower than $300.
// describe("in budget", () => {
//   test('should retu200rns "in budget" if a price is lower than $300', () => {
//     let num1 = 200;
//     let num2 = 400;
//     expect(inBudget(num1)).toEqual("in budget");
//     expect(inBudget(num2)).toEqual("out of budget");
//   });
// });
// // Write the function that will make the test pass.
// const inBudget = (int) => {
//   if (int <= 300) {
//     return `in budget`;
//   } else if (int > 300) {
//     return `out of budget`;
//   }
// };

// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// describe("returning smaller number", () => {
//   let num1 = 342;
//   let num2 = 4354;
//   test("should return the smallest number", () => {
//     expect(smallNum(num1, num2)).toEqual(num1);
//   });
// });
// // Write the function that will make the test pass.
// const smallNum = (n1, n2) => {
//   if (n1 < n2) {
//     return n1;
//   } else if (n2 < n1) {
//     return n2;
//   }
// };

// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// describe("checking for odd number", () => {
//   let num1 = 25;
//   let num2 = 20;
//   test("should test id number is odd", () => {
//     expect(isOdd(num1)).toEqual(true);
//     expect(isOdd(num2)).toEqual(false);
//   });
// });
// // Write the function that will make the test pass.
// const isOdd = (number) => {
//   if (number % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// };
// // 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// describe("check for color of fruit", () => {
//   test("should fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
//     expect(testColor("banana")).toEqual("yellow");
//     expect(testColor("apple")).toEqual("red");
//     expect(testColor("grape")).toEqual("purple");
//   });
// });
// const testColor = (fruit) => {
//   if(fruit === "banana") {
//     return "yellow";
//   } else if (fruit === "apple") {
//     return "red";
//   } else if (fruit === "grape") {
//     return "purple";
//   }
// }

// Write the function that will make the test pass.
// 7. Write the test for a function called rick that returns "Morty".
// describe("returns Morty", () => {
//   test("should return Morty", () => {
//     expect(rick()).toEqual("Morty");
//   });
// })
// const rick = () => {
//   return "Morty";
// }

// Write the function that will make the test pass.
// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

// Write the function that will make the test pass.
// 9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

// Write the function that will make the test pass.
// 10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2.

// Write the function that will make the test pass.
// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("take two numbers and multiply them to one another", () => {
  test("should take two numbers as arguments and logs the result of one of the numbers multiplied by the other", () => {
    expect(multBy(3, 3)).toEqual(9);
  });
});
// Write the function that will make the test pass.
const multBy = (num1, num2) => {
  return num1 * num2;
};
// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// describe("if divisible", () => {
//   test("first number is evenly divisible by the second", () => {
//     expect(divisibleBy(4, 2)).toEqual("4 is divisible by 2");
//   });
// });

// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 === 0) {
//     return `${num1} is divisible by ${num2}`;
//   }
// };

// Write the function that will make the test pass.
// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.

// describe("fizzbuzz", () => {
//   test("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.", () => {
//     expect(fizzBuzz(15)).toEqual(1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz");
//   })
// })
// const fizzBuzz = (int) => {
//   for(let i = 1; i <= 15; i++) {
//     if(i % 3 === 0) {
//       return "fizz";
//     } else if (i % 5 === 0) {
//       return "buzz"
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       return "fizzbuzz";
//     } else {
//       return i;
//     }
//   }
// }

// Write the function that will make the test pass.
