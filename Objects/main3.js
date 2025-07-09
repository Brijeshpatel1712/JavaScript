// Objects
var user2 = {
    name: "Rahul",
    age: 25,
    gender: "male",
    city: "Bangalore",
    hobbies: "coding",
    marks: [25, 100, 80, 90, 80]
  };
  // 1st Way
  user2['Date_of_Birth'] = "9-Oct-1984";
  // 2nd Way
  user2.Date_of_Birth = "02-Oct-1984";
  console.log(user2);