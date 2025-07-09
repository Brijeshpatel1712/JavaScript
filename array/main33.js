
// let name = "Nobita";
// for(let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }


// let name = "jay hind";
// let bag = "";
// for(let i = 0; i < name.length; i++) {
//   bag = bag + name[i];
// }
// console.log(bag);


// let name1 = "Nobita";
// console.log(name1);
// console.log(name1[0]);

// let name2 = ["N","o","b","i","t","a"];
// console.log(name2);
// console.log(name2[0]);


// II Way
// let name = "Madam";
// let output = "";
// for(let i=0; i<name.length; i++) {
//   if(i==0) {
//     output = output + "N";
//   } else {
//     output = output + name[i];
//   }
// }
// console.log(output); 



// let name = "shivendra";
// let output = "";
// for(let i=0; i<name.length; i++) {
//   if(name[i] != "s") {
//     output = output + name[i];
//   }
// }
// console.log(output);

// let names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
// let count = 0;
// for(let i=0; i<names.length; i++) {
//   let name = names[i];
//   if(name[0] == "N" || name[7] == "n") {
//     count++;
//   }
// }
// console.log(count);

	let names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
	let count = 0;
	for(let i=0; i<names.length; i++) {
	  let name = names[i];
	  for(let j = 0; j<name.length; j++) {
	    if(name[j]=='a' || name[j]=='A') {
	      count++;
	      break;
	    }
	  }
	}
	console.log(count);


