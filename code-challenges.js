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
// Input - Create a function called boilingPoint
// Output - Determine if value is above, below, or at boiling point
// within my function I want to use a conditional statement
// string interpolate temp1, temp2, temp3
// Create an if - if below boiling point return "42 is below boiling point". // if at boiling point, return "212 is at boiling point". // if above boiling point, return "350 is above boiling point"

const temp1 = 42
const temp2 = 212
const temp3 = 350
boilingPoint = (temperature) => {
  if (temperature < 212) {
    return "42 is below boiling point"
  } else if (temperature === 212) {
    return "212 at boiling point"
  } else {
    return "350 above boiling point"
  } }
 //Expected output: "42 is below boiling point"
   console.log(boilingPoint(temp1)) //Output: 42 is below boiling point

 //Expected output: "212 is at boiling point"
   console.log(boilingPoint(temp2)); //Output: 212 is at boiling point

 //Expected output: "350 is above boiling point"
   console.log(boilingPoint(temp3));  //Output: 350 is above boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// input - arrays of numbers
// output - combine the arrays and output their combined lengths using provided variables
// Create a variable oneArray that puts both const on one line of code, and combine the two using .concat
// concat will combine both arrays into one. Put .concat after first const to tell it it's going to execute with (padres1998WorldSeriesRuns) or vice versa.
// console.log(oneArray.length)

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
const oneArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(oneArray.length,); //Output -- 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// input - string
// output - a string the displays our given const backwards
// create a console.log using the const that was given to me Alpha 2023
// Then I need to split the const, reverse and join it.

const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"
console.log(currentCohort)
console.log("Alpha 2023".split("").reverse().join()); // Output: 3202 ahplA

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// input - array of numbers
// output -  last index of the given value from the array using the test variables.
// using the given array/variables create a console.log using lastIndexOf - lastIndexOf goes through each value within the array and returns the last index of the variable you have asked it to return. If there is no value/undefined it will come back -1.
const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
const givenValue2 = 10


//Expected output: 7
console.log(myNumbers.lastIndexOf(givenValue1)); // Output: 7
 //Expected output: 8
 console.log(myNumbers.lastIndexOf(givenValue2)); // output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

var sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
sanDiegoSummerTemperatures.sort((a, b) => b - a)
console.log(sanDiegoSummerTemperatures);

var sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
sanDiegoWinterTemperatures.sort((a, b) => b - a)
console.log(sanDiegoWinterTemperatures);