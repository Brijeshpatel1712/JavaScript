// Identify whether a given number is even or odd using a loop.

let num = 3;
for (let i = 0; i <= num; i++) {
  if (i === num) {
    if (i % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  }
}