//Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
//var arr1 = [3, 9, 15, 4, 10]
// Expected output:

// [30, 90, 150, 40, 100]
// Function that takes in one parameter
// You use the built in function .Map to mulipty by 10.
// Have the function return the value multiplied by 3. 
// Log it. 

// var arr1 = [3, 9, 15, 4, 10]
// const multi3 = arr1.map(value => {
//     return value * 10
// })
// console.log(multi3)

// Write a function that takes in an array and returns a new array with only odd numbers
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// Expected output:

// [7, 3, 5, 13]

// create a function that returns only oddNumbers
// return an array using .filter and modulo
// make the value not equal zero. 

const onlyOdd = (array) => {
    return array.filter(value => value % 2 != 0)
}
    console.log(onlyOdd(arr2))
 


