// 1-create a data model to represent your classmates 

var classmate = {name:{first: "firstName", last: "lastName"} ,age: 0, sex: "maleOrFemale"};
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
function createThem(theName, firstName, lastName, age, sex) {

	var obj = {};
	obj["name"] = {};
	var access = obj["name"]; 
	
	access["first"] = firstName;
	access["last"] = lastName; 
	obj["age"] = age;
	obj["sex"] = sex;
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
var taha = {};
var hamza = {};
var mohamed = {};
createThem(adnen, "Adnen", "Ben Abdelaali", 27, "male"); 
createThem(taha, "Taha", "Zanzen", 20, "male");
createThem(hamza, "Hamza","", 20, "male");
createThem(mohamed, "Mohamed Amine", "Khadraoui", 20, "male");
//     -create an array to hold the classmates that you created and what you created to it .
var classmates = [adnen, taha, hamza, mohamed];  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate) {
	var access = mate["name"]; 
	
	return "My First name is " + access["first"] +" ,my last name is : " + access["last"] + " , I am " + mate["age"] + " years old and I am a " + mate["sex"] + " ." 
} 
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend(mate, array) {
	array[array.length] = mate; 
	return array; 
}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(array) {
	var count = 0;
	for(var i = 0 ; i < array.length; i++){
		var access = array[i]
		if(access["sex"] === "male") {
			count += 1;
		}
	}
	return count;
}
//     -Write a function searchMates that, given a query and an array of Mates,
function searchMates(query, array) {
	for(var i = 0; i < array.length; i++){
		var check = array[i];
		var myName = check["name"];
		for (var key in myName){
		    console.log(myName[key]);
			if(query.toUpperCase() === myName[key].toUpperCase()) {
				return array[i];
			}	
		}
		
	}
	return "Your mate is lost ! Try again ";
}
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

