// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"
// const moreCharacters = (fruit1, fruit2) => {
//     if (fruit1.length > fruit2.length){
//         return fruit1
//     } else if (fruit2.length > fruit1.length){
//         return fruit2
//     } else {
//     return "something went wrong"
//     }
// }
// console.log(moreCharacters(fruit1, fruit2)); Outcome: banana

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"
// const moreCharacters = (fruit3, fruit4) => {
//     if (fruit3.length > fruit4.length){
//         return fruit3
//     } else if (fruit4.length > fruit3.length){
//         return fruit4
//     } else {
//     return "something went wrong"
//     }
// }
// console.log(moreCharacters(fruit3, fruit4))  Outcome: Cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

//Expected output: "42 is below boiling point"
// const temp1 = 42
// const temp2 = 212
// const boilingPoint = (temp1, temp2) => {
//     if (temp1 < temp2) {
//         return "42 is below boiling point"
//     } else if (temp1 > temp2)
//     return "that's impossible"
// } 
//     console.log(boilingPoint(temp1, temp2));

// console.log(boilingPoint);

// const temp2 = 350
// // Expected output: "350 is above boiling point"
// const temp1 = 212
// const temp2 = 350
// const boilingPoint = (temp1, temp2) => {
//     if (temp1 < temp2) {
//         return "350 is above boiling point"
//     } else if (temp1 > temp2)
//     return "212 is boiling point"
// } 
//     console.log(boilingPoint(temp1, temp2));

// Expected output: "212 is at boiling point"

const temp2 = 211
const temp3 = 212
const boilingPoint = (temp3, temp2) => {
     if (temp2 > temp3) {
    return "under boiling point"
} else if (temp2 < temp3){
return "212 is at boiling point"}
else {
    return "temp.exe stopped working"
}
}
console.log(boilingPoint(temp2 < temp3));

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9
// const oneArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(oneArray.length,); //Output -- 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// const currentCohort = "Alpha 2023"
// // Expected output: "3202 ahplA"
// console.log(currentCohort)
// console.log("Alpha 2023".split(""));
// console.log(console.log("Alpha 2023".split("").reverse()));
// console.log("Alpha 2023".split("").reverse().join()); // Output: 3202 ahpla

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// Expected output: 7
// console.log(myNumbers);
// console.log(myNumbers.length);
// console.log(myNumbers[0]);
// console.log(myNumbers[myNumbers.length - 7]);
// const givenValue2 = 10
// // Expected output: 8
// console.log(myNumbers);
// console.log(myNumbers.length);
// console.log(myNumbers[0]);
// console.log(myNumbers[myNumbers.length - 1]);

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// var sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]
// sanDiegoSummerTemperatures.sort((a, b) => b - a)
// console.log(sanDiegoSummerTemperatures);

// var sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]
// sanDiegoWinterTemperatures.sort((a, b) => b - a)
// console.log(sanDiegoWinterTemperatures);