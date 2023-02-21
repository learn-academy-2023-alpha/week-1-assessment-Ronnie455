// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

// const cohort = "LEARN 2023"
//  console.log(cohort.length)

// a) Your answer: This will display the number of characters in const cohort
// b) Verify and explain: It comes back as 10. My answer was correct because length of arrays in javascript returns or sets the number of elements in a given array.

// --------------------2) What will this log?

// const greeting = "Hello World!"
//  console.log(greeting[4])

// a) Your answer: It will come back as o
// b) Verify and explain: I was correct because [] declares the objects in the array. By typing [4] it chooses the 4th character in the array which is "o"

// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
//  console.log(languages[index])

// a) Your answer: I think this will log ruby because "Javascript" is one index. so Javascript is 0 and ruby is 2
// b) Verify and explain:I was correct. since it's asking for the whole [index] it's logging the entire word "Ruby".

// --------------------4) What will this log?

// const weekendDays = ("saturday", "sunday")
// console.log(weekendDays.toUpperCase())

// a) Your answer:I think this will capatalize everything in the string
// b) Verify and explain: .toUpperCase method returns the value of the string converted to uppercase. When running it in terminal it only came back SUNDAY. I had to take out the quotations after saturday and before sunday to get it to come back as SATURDAY and SUNDAY.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: string
// b) Verify and explain: I was incorrect because it logged number. typeof
