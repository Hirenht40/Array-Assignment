// 35. Write a functions which checks if all items are unique in the array.

let arr = [122, 46322, 4123, 4.8, "Hirenkumar", "Trivedi", 48435, true, false];
let array = [];
let notUnique = [];
arr.forEach((num) => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
        array.push(num);
    } else {
        notUnique.push(num);
    }
})
console.log(array);
console.log(notUnique);