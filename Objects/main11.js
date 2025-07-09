let arr = [1, 3, 5, 4, 3, 7, 8, 7, 9, 4, 3, 5, 1, 5];

let obj = {};

for (let i = 0; i <= arr.length - 1; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  } else {
   obj[arr[i]]++;
  }
}
console.log(obj);