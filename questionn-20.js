// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


const MARKS = 85;



if (MARKS < 0 || MARKS > 100) {
    console.log("Incorrct Marks")
} else if (MARKS >= 80 && MARKS <= 100) {
    console.log("Grade is A")
} else if (MARKS >= 70 && MARKS <= 79) {
    console.log("Grade is B")
} else if (MARKS >= 60 && MARKS <= 69) {
    console.log("Grade is C")
} else if (MARKS >= 50 && MARKS <= 59) {
    console.log("Grade is D")
} else {
    console.log("F")
}