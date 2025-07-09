// Verify if a number is prime or not using a loop.

let n = 5;
let isprime = true;

if (n <=1) {
    isprime = false;
} else {
    for (let i = 2; i<=Math.sqrt; i++) {
        if  (n % i === 0) {
            isprime = false;
        }
    }
}

if (isprime) {
    console.log(`${n} is a prime Namber`);
} else {
    console.log(`${n} is Not a prime Number`);
    
}