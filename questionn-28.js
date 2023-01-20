// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

let primeNumnbers = [];
let is_Prime;

for (let i = 0; i <= 100; i++) {
    is_Prime = true;
    if (i === 0 || i === 1) {
        continue;
    }

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            // not prime
            is_Prime = false;
            break;
        }
    }

    if (is_Prime) {
        primeNumnbers.push(i);
    }
}

console.log(primeNumnbers);