// Challenges
// DON'T FORGET TO PSEUDO CODE!

// Use .map() or .filter() to complete all of the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
 //var arr1 = [3, 9, 15, 4, 10]

//PSEUDO Code:
//Declare a function with 1 parameter 
//want to use .map() higher order function to iterate over the array
//multiply each number in the array by 10
//return the new array.

// const multipy = arr1.map((value) =>{
//     return value * 10;
// })

//console.log(multipy);
// [30, 90, 150, 40, 100]


// Write a function that takes in an array and returns a new array with only odd numbers
 //var arr2 = [2, 7, 3, 5, 8, 10, 13]

// Expected output:
//Declare a function with 1 parameter
//using the filter function to iterate over the array and return a new array of different length and only odd numbers
//use modulo on numbers to check for even or odd.

// const oddNumbers = arr2.filter((value) =>{
//     return value % 2 !== 0;
// })

//console.log(oddNumbers);
// [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 //var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output: 

//we want too pass in the letters and reject the numbers
//declare a function with 1 parameter 
//iterate over the array and using filter method 
//return all the strings

// const letters = comboArr.filter((value) => {
//     return typeof value === "string" 
// })

//console.log(letters.join(``));
// "nicework"


// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
  //var str = "javascript is awesome" 

// Expected output:

// "jvscrpt s wsm"

//Declare a function with a single argument 
//using filter method to iterate over the string
//return a string with no vowels

// const noVowels = str.split(``).filter((value) =>{
//    if(value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"){
//        return value;
//    } 
// })

//console.log(noVowels.join(``));

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
 var arr1 = [3, 7, 10, 5, 4, 3]
 var arr2 = [7, 8, 2, 1, 5, 4]

//join both array's first
//declare a function with 1 parameter 
//use filter method to return a new array with no repeating values

const arr = arr1.concat(arr2);

const noDuplicates = arr.filter((value, index, array) =>{
   return array.indexOf(value) === index;
});


console.log(noDuplicates);



// Expected output:

// [3, 7, 10, 5, 4, 8, 2, 1]