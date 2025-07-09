let arr = [1, 3, 4, 6, 1, 5];

let obj = {};

for (let i = 0; i <= arr.length - 1; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
}
let sum = 0;
for (let key in obj) {
  if (obj[key] == 2) {
    sum = sum + Number(key);
  }
}

console.log("The sum is", sum);