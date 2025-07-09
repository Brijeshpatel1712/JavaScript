var subject_marks = [10, 15, 19, 20, 21];
var sum_marks = 0;
for (var i = 0; i < subject_marks.length; i++) {
    sum_marks = sum_marks + subject_marks[i];
}
var average = Math.floor(sum_marks / subject_marks.length);
console.log("Total sum is ", sum_marks);
console.log("Average is ", average);