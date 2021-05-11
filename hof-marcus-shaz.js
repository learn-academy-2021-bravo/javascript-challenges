// Use .map() or .filter() to complete all of the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
        // var arr1 = [3, 9, 15, 4, 10]
        // // Expected output:
        // // [30, 90, 150, 40, 100]
        // const multiByTen = (arr) => {
        //     return arr.map(num =>{
        //         return num * 10;
        //     });
        // }
        // console.log(multiByTen(arr1));


// Write a function that takes in an array and returns a new array with only odd numbers

        // var arr2 = [2, 7, 3, 5, 8, 10, 13]
        // Expected output:
        // [7, 3, 5, 13]

        // const onlyOdds = (arr) => {
        //     return arr.filter(num => {
        //         return num % 2 === 1
        //     });
        // }
        //     console.log(onlyOdds(arr2));


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
        //  var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
        // Expected output:
        // "nicework"
        // const onlyStr = (arr) => {
        //     let str = arr.filter(item => {
        //         return typeof item === "string"
        //     })
        //     return str.join('');
        // }
        // console.log(onlyStr(comboArr));

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.

        // var str = "javascript is awesome" 
        // // Expected output:
        // // "jvscrpt s wsm"
        // const noVowels = (inputStr) => {
        //     let newArr = inputStr.split('');
        //     return newArr.filter(char => {
        //         return char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'
        //     }).join('');
        // }
        // console.log(noVowels(str));

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var arr1 = [3, 7, 10, 5, 4, 3]

var arr2 = [7, 8, 2, 1, 5, 4]

// Expected output:
// [3, 7, 10, 5, 4, 8, 2, 1]

const joinArray = (ar1, ar2) => {
    let combinedArr = ar1.concat(ar2);
    return combinedArr.filter((char, index) => combinedArr.indexOf(char) === index);
}

console.log(joinArray(arr1, arr2));

// const joinArray2 = (ar1, ar2) => {
//     let combinedArr = []
//     for(let i = 0;i < ar1.length; i++) {

//         for(let j = 0;j < ar2.length; j++) {
//             if(ar1[i] !== ar2[j] ) {
//                 combinedArr.push(ar2[j])
//             }
//         }
//     }
//     return combinedArr;
// }
// console.log(joinArray2(arr1, arr2));
// check each array
// join both array