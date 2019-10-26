// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

/*
	- unfortuanetly i didn't study how to implement the data model but i know the concept,
	so for the first point we need to make an object has let's say (name, age, talents, status, 'and so on') and then assign the values by 
	an array has the values of each key and ofcource for loop.
	- for the displayFunction it displays the wanted person or classmate and his infos.
	- addFriend func allows you to add onother classmate to the array.
	- nbOfMale func has a for loop to go through the array or object of classmates and a counter, for every key gender has a 'male' as a value 
	counter will be + 1 and then will return the counter for us.
	- searchMates take a name of a friend and it go through the object searching for the name been provided and return his/her infos.  
*/

function makeClassMates(name, age, gender, talents) {
	return {
		name: name,
		age: age,
		gender: gender,
		talents: talents
	}
}

var arr = [
	makeClassMates('hashem', '21', 'male', 'beatboxer'),
	makeClassMates('malik', '23', 'male', 'clown'),
	makeClassMates('ali', '18', 'female', 'loner'),
];

function displayFriend(mate) {
	return  "name: " + mate.name + '\n' +
			"age: "	 + mate.age + '\n' +
			"gender: " + mate.gender + '\n' +
			"talents: " + mate.talents
}

function addMate(mate) {
	arr.push(mate);
	
	return arr;
}

function nbOfMale(mate) {
	var count = 0;
	for (var key in mate) {
		if (mate.gender === 'male') {
			count++;
		}
	}

	return count;
}