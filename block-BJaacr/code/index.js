/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses);
// 2. Log the length of the "houses" key
console.log(got.houses.length);

// 3. Log the name of all houses in got one by one
for(house of got.houses){
  console.log(house.name);
}
// 4. Log the name of all the people in house Starks (index 0) one by one
for(pupil of got.houses[0].people){
  console.log("name of people in starks :",pupil.name);
}
// 5. Log the name of all the people in house Lannisters (index 1) one by one
for(pupil of got.houses[1].people){
  console.log("name of people in lannister :",pupil.name);
}
// 6. Log the description of all the people in house Lannisters (index 1) one by one
for(pupil of got.houses[1].people){
  console.log("description of people in lannister :",pupil.description);
}
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
for(pupil of got.houses[1].people){
  console.log(`I am ${pupil.name} and my bio is ${pupil.description}`);
}

// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for(pupil of got.houses[0].people){
  console.log(`I am ${pupil.name} and my bio is ${pupil.description}`);
}

// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for(pupil of got.houses[0].people){
  if(pupil.name === "Robb Stark"){
    console.log(`robb : ${pupil.name} - ${pupil.description}`)
  }
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
for(pupil of got.houses[1].people){
  if(pupil.name === "Tywin Lannister"){
    console.log(`tywin : ${pupil.name} - ${pupil.description}`)
  }
}
// 11. Push the name of the houses in an array named `houseNames` and Log the array
let houseNames = [];
for(houseName of got.houses){
  houseNames.push(houseName.name);
}
console.log("houseNames :", houseNames);
// 12. Log the size of people in Starks house
console.log("length of people in stark house :",got.houses[0].people.length);
// 13. Log the size of people in Lannisters house
console.log("length of people in lannister house :",got.houses[1].people.length);
// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
let obj = new Object();
for(houseName of got.houses) {
  obj[houseName.name] = houseName.people.length;
}
console.log("obj :", obj);
// 15. Log the name of all the people of all the houses in got one by one
for(houseInfo of got.houses){
  for(peopleName of houseInfo.people){
    console.log("people :",peopleName.name)
  }
}
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople =new Array();
for(houseInfo of got.houses){
  for(peopleName of houseInfo.people){
    allPeople.push(peopleName.name);
  }
}
console.log("allPeople :",allPeople)
// 17. Log the value and length of `allPeople` array created above
for(people of allPeople){
  console.log(`${people} and length - ${people.length}`);
}
// 18. Push all descriptions into an array named `allDescription`
let allDescription = [];
for(houseInfo of got.houses){
  for(descriptionInfo of houseInfo.people){
    allDescription.push(descriptionInfo.description);
  }
}
console.log(allDescription);
// 19. Log the value and length `allDescription`
for(desc of allDescription){
  console.log(`${desc} and length of decsription is ${desc.length}`)
}
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
for(desc of allDescription){
  if(desc.length > 30){

    console.log(`more than 30: ${desc} and length of decsription is ${desc.length}`)
  }
}
// 
// for(desc of allDescription){
//   if(desc.length < 30){

//     console.log(`less than 30: ${desc} and length of decsription is ${desc.length}`)
//   }
// }