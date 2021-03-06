// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
// we need a function
//named marco
//That outputs polo

// const marco = () => {
//     return "polo"
// }
// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// write a function that takes in a parameter of a name 
//give argument
//use string interpolation 

// const greeting = (name) =>{
//     return `Welcome, ${name}`
// }
// console.log(greeting("Viv"))




// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//Declare a function expression
//Use madulo to check number 
//return the string odd or even


// const oddOrEven = (num) => {
//     if(typeof num !== "number"){
//         return "Not a number"
//     }

//     if(num % 2 === 0){
//         return "Even"
//     }
//     else{
//         return "Odd"
//     }
// }
// console.log(oddOrEven("Hi"))





// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//create a function that takes in only numbers
//check variables to make sure that is't a number 
// const triple = (num) => {
//     if(typeof num !== "number"){
//         return "Not a number"
//     }

//    return num * 3
// }


// Write a function named multiply that takes two numbers as arguments 
//and returns the result of the numbers multiplied together.
//write a function that is named multiply
//need two place holders for two arguments
//want function to return the outcome of two numbers multiplied together

// const multiply = (num1, num2) =>{
//     if(typeof num1 !== "number" || typeof num2 !== "number"){
//         return "wrong input"
//     }
//     return num1 * num2;
// }

// console.log(multiply(`hello`,4));


// Write a function named divisibleBy that takes two numbers as arguments and returns
// whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Need to create function divisible by that takes in two numbers as arguments
// place holder for two arguments return evenly divisible 
// need to create an if statement 

const divisibleBy = (num1, num2) => {
   if(num1 % num2){
     return "10 is evenly divisible by 5";
   } 
}


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.