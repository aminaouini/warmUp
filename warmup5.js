// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function each(coll, f) {

	if(Array.isArray(coll)) {

		for(var i = 0;  i < coll.length; i++) {

			f(coll[i], i);

		}

	}
	 else {

	 	for(var key in coll) {

	 		f(coll[key], key);

	 	}

}

}

var mates = [];

function classmates(subject, age, bag, gender) {

	var students = {

		name: name,

		subject: subject,

		age: age,

		bag: bag,

		gender: gender

	};

	mates.push(students);

	return students;

}



function displayFriend(friend) {

	return "His name is "+friend.name+", Your friend is "+friend.age+" years old, he has a "+friend.bag+" bag, and you study "+friend.subject+" together and he is a "+friend.gender;

}

function addFriend(friend) {

	each(friend, function(element, key) {

		mates.push(key, element);

	});

	return "Your friend has been added";

}

function nbOfMale(student) {

	var count = 0;

	each(student, function(element, key) {

		if(element === "male"){

			count++;
		}

		

});
	return "The number of male students is "+count;

}

function searchMates(mate, name) {

	var match = '';
	each(mate, function(element, key) {

		if(element === name){

		match = element;

	}

	});

	return "the name "+match+" is a match";

}