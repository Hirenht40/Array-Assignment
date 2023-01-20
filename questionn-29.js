// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let Sum_even = 0;
let Sum_odd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        Sum_even = Sum_even + i;
    } else {
        Sum_odd = Sum_odd + i;
    }
}

console.log(`
Even Sum is ${Sum_even}
Odd Sum is ${Sum_odd}
`);