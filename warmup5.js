// 1-create a data model to represent your classmates 

var classmate = {name:{first: "firstName", last: "lastName"} ,age: 0};
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
function createThem(theName, firstName, lastName, age) {

	var obj = {};
	obj["name"] = {};
	var access = obj["name"]; 
	
	access["first"] = firstName;
	access["last"] = lastName; 
	obj["age"] = age;
	//console.log(access["first"]);
	//console.log(access["last"]);
	//console.log(classmate["age"]);
	for(var key in obj) {
		theName[key] = obj[key];
		console.log(obj[key]);
	}

	

	return theName;

};
var adnen = {};
 createThem(adnen, "Adnen", "Ben ABdelaali", 27);

createThem("Taha", "Zanzen", 20);
createThem("Hamza","", 20);
createThem("Mohamed Amine", "Khadraoui", 20);
//     -create an array to hold the classmates that you created and what you created to it .
var classmates = [];  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.