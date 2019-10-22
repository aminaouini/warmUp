// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.

	function makeClassmates ( name, age, nationality, level, gender ){
		 classmate = {
			"name" : name,
			"age" : age,
			"nationality" : nationality,
			"level" : level
		}
	}
//     -create an array to hold the classmates that you created and what you created to it .  
	var classMates = [];
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend ( classmate ) {
		return classmate.name+ " " + classmate.age + " " + classmate.nationality + " " + classmate.level
	}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
	function holdClassmates ( classmate ) {
		classMates.push( classmate )
	}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
	function numberOfMaleFriends ( array ) {
		var acc = 0;
	for ( var i = 0; i < array.length; i++ ) {
		if (array[i].age === "male") {
			acc ++;
		}
	}
	return acc
	}
//     -Write a function searchMates that, given a query and an array of Mates,
	function searchMates ( array, name ) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].name === name){
				return array[i].name+ " " + array[i].age + " " + array[i].nationality + " " + array[i].level
			}
		}
	}

//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
	function searchMates ( array, query ) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].name === query || array[i].age === query || array[i].nationality === query ){
				return array[i].name+ " " + array[i].age + " " + array[i].nationality + " " + array[i].level
			}
		}
	}