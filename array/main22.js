var names = ["A", "B", "C", "D", "E", "F", "G", "H", "K"];
var start = 0;
// Handle Even Array
if (names.length % 2 == 0) {
    start = names.length / 2;
}
// Handle Odd Array
else {
    start = Math.floor(names.length / 2);
}
for (var i = start; i < names.length; i++) {
    console.log(names[i]);
}