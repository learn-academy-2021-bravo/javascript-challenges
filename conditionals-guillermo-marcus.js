// Make sure you try different options and change the variables to ensure properly working code.
//
// // Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// //
// // Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var hungry=true;
// if(hungry){
//   console.log("eat food")
// } else{
//   console.log("keep coding")
// }
// // Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var trafficLight="yellow"
// if(trafficLight=="green"){
//   console.log("go")
// }else if(trafficLight=="yellow") {
//   console.log("slow down")
// }else if(traffickLight=="red"){
//   console.log("stop")
//}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
// let num1 = 20;
// let num2 = 10;
// if(num1 > num2) {
//   console.log(`${num1} is the larger number`);
// } else if (num2 > num1) {
//   console.log(`${num2} is the larger number`);
// } else if (num1 == num2) {
//   console.log(`The numbers are the same`);
// } else {
//   console.log(`something went wrong`);
//}
//
// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
// var theNum = 8
// if(theNum % 2 == 0){
//   console.log("even")
// }
// else{
//   console.log("odd")
//}
//
// STRETCH Challenges
//
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// var thePercentage = 0
// if(thePercentage === 100){
//   console.log("perfect score")
// }

// else if (thePercentage == 0){
//   console.log("No score available")
// }

// else if (thePercentage < 60){
//   console.log("F")
// }

// else if (thePercentage < 70){
//   console.log("D")
// }

// else if (thePercentage < 80){
//   console.log("C")
// }

// else if (thePercentage < 90){
//   console.log("B")
// }

// else if (thePercentage < 100){
//   console.log("A")
// }



// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
//var theWord = "hello"
//if(typeof(theWord)== "string"){
//  console.log("this is a string")
//} 
// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user???s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var thePassword = "ggggggg"
if(thePassword.length >= 12 && thePassword.includes("!")){
  console.log("that is a mighty strong password")
}
else if(thePassword.length >= 8 || thePassword.includes("!")){
  console.log("that password is strong enough")
}
else{
  console.log("that is not a valid password")
}