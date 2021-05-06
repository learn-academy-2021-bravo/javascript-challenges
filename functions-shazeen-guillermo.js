// Write a function named marco that returns "polo".
// const marco = () => {
//   return "polo";
// };
// console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (person) => {
//   return `welcome ${person}`;
// };
// console.log(greeting("sam"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//   if (number % 2 === 0) {
//     return `even`;
//   } else if (number % 2 === 1) {
//     return `odd`;
//   } else {
//     return `${number} is not valid`;
//   }
// };
// console.log(oddOrEven("twelve"));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) =>{
//     return number * 3
// }
// console.log(triple(2))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (number1, number2)=>{
//     return number1 * number2
// }
// console.log(multiply(5,6))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (number1, number2)=>{
//     if(number1 % number2 === 0){
//         return `${number1} is evenly divisible by ${number2}`
//     }else{
//         return `${number1} is not evenly divisble by ${number2}`
//     }
// }
// console.log(divisibleBy(20,10))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (grade)=>{
    if(grade >=90 && grade <= 100){
        return "A"
    }
    else if(grade>=80 && grade<=89){
        return "B"
    }
    else if (grade >= 70 && grade <= 79){
        return "C"
    }
    else if (grade >= 60 && grade <= 69){
        return "D"
    }
    else if (grade >= 0 && grade <= 59){
        return "F"
    }
    else{
        return `${grade} is not valid`
    }
}
console.log(assignGrade(67));
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges

// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
