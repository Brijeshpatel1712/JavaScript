// Objects
var user2 = {
  name: "Rahul",
  age: 25,
  gender: "male",
  city: "Bangalore",
  hobbies: "coding",
  marks: [25, 100, 80, 90, 80],
  address: {
    state: "Uttarakhand",
    country: "India",
    district: "Dehradun",
    pincode: "249201"
  }
};
// Bracket Notation
console.log(user2["address"]["country"]);
// Dot Notation
console.log(user2.address.country);