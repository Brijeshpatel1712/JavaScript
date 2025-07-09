var count = 1;
for (var i = 1; i < 10; i++) {
  count++;
  if (i == 5) {
    continue;
  }
}
console.log(count); 