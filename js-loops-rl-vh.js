// Logging values with for loops

// Write a for loop that logs each number from 1 - 20.
// for(let i=0; i<=20; i++){
//     console.log(i)
// }


// Write a for loop that logs the result of each number from 1 - 20 tripled.
// for(let i = 0; i<=20; i++){
//    console.log(i*3) 
// }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number,
// returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
// for(let i = 0; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     } else {
//        console.log(`odd`); 
//     }
//  }

// Looping over an array. Consider this variable: 
           //  0   1   2  3   4
 var nums = [3, 57, -9, 20, 67] 
// Create a loop that will log the highest number from the array. Expected output --> 67
// for(let i = 0; i < nums.length; i++){
//    console.log(nums[i]); 
// }


// Create a loop that will log the lowest number from the array Expected output --> -9
//    for(let i = 2; i < nums.length -2; i++){
//        console.log(nums[i]);
//    } 

// Create a loop that will log the remainder of each number when divided by 2. 
//Expected output --> 1, 1, -1, 0, 1
// for(let i = 0; i < nums.length; ++i){
//    console.log(nums[i] % 2);
// }
// Looping over a string. Consider this variable:
// Write the code that will log the number of times the letter "e" occurs in the string. 
//Expected output --> 2

let count = 0;
var myString = "learn student"  

for(let i = 0; i < myString.length; i++){
    if(myString[i] === `e`){
       count++
    }
    console.log(count);
}



// STRETCH Challenges
// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc
// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc




//1. take out all the given ingridients
//set down plate
//open sandwich bag and takeout two slices of bread
// put down the bread on the plate
//open jars
//take a knife and put it in the peanut butter and spread it on the left slice of bread
// take out a clean knife
//put knife in jelly and spread it ont he right slice of the bread
//now take both slices in each hand and put the peanutbutter side with the jelly side
//put sandwhich back down on plate and grab a clean knife
//take the knife and start from the left hand corner and cut a straight diagonal line throught the middle until
//bottom right hand corner(should have two equal triangle size sandwhiches)
//take a bite of the left half than take a bite of the right half
