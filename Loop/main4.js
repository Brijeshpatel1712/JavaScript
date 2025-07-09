// Determine the factorial of a user-input number 'n'.
// suppose n=5

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *=i;
}
console.log(`The factorial of ${n} is ${factorial}`);