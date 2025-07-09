var marks = [10, 15, 19, 20, 21, 45, 31, 18];
var max = -Infinity;
for (var i = 0; i < marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i];
    }
}
console.log(max);