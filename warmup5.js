// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
<<<<<<< HEAD
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.



function factory(array){
	var newArr = [];

	for (var i = 0; i < array.length; i++){
		newArr.push("name: " + array[i].name + ", "  + "age: " + array[i].age)
	}
	return newArr
}


var classMates = [{name: "ons",
				age: 31}, 
				{name: "insaf",
				 age: 26},
				 {name: "essam",
				 age: 18}];

function displayFriend(array){
	var newArr = [];

	for (var i = 0; i < array.length; i++){
		newArr.push(array[i].name)
	}

	return newArr;
}
=======
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
>>>>>>> 53bc200a820913843d17cdb55e2d8c895974ce20
