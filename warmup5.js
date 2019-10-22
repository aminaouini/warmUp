/// 1-create a data model to represent your classmates
//think of different attributes of your classmates? what do all of them have ?
//create a factory function.
function classmate(name, hobby, age, gender) {
	return {
		name: name,
		hobby: hobby ,
		age: age,
		gender: gender 
	}
}
//create an array to hold the classmates that you created and what you created to it .
var mate1 = classmate("Hamza", "tennis", 19,'male');
var mate2 = classmate("Omar", "surfcasting", 34 ,'male');
var mate3 = classmate("Wajdi", "salsa", 27,'male');


var classmates = [mate1,mate2,mate3];
//write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate) {
	return mate.name + " is " + mate.age + " like " + hobby 
}
//write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend(mate) {
	classmates.push(mate);
	return classmates;
} 
//calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(classmates) {
	var numMales = 0;
	for (var i = 0; i < classmates.length; i++) {
		if(classmates[i].gender === 'male') {
			numMales ++ ;
		}
		
	}
	return numMales
}
//Write a function searchMates that, given a query and an array of Mates,
//searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function searchMates(query, arrayOfMates) {
	var matchingMates = [];
	for (var i = 0; i < arrayOfMates.length; i++) {
		if (arrayOfMates[i].name === query) {
			matchingMates.push(arrayOfMates[i]);
		}
	}
	return matchingMates;
}