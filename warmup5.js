// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function makeMate(name, age, sex, gender, education){
	return {
		name: name,
		age: age,
		sex: sex,
		gender: gender,
		education: education
	};
}


var classMates = [
	makeMate("Adam", 23, "male", "male", "Bachelor"),
	makeMate("Hashem", 21, "male", "male", "Bachelor Student"),
	makeMate("Essam", 18, "male", "male", "Community College Student"),
	makeMate("Malik", 21, "male", "male", "Bachelor")	
];


function displayFriend(mate){
	console.log(`My mate's name is ${mate.name}, he's ${mate.age} years old, he is ${mate.gender}`);
}

function addFriend(mate){
	classmates.push(mate);
}

function nbOfMale(array){
	return array.filter(function(element){
		return element.gender === "male";
	}).reduce(function(acc){
		return ++acc;
	}, 0)
}

function searchMates(array, query){
	return array.filter(function(element){
		for(var key in element){
			if(element[key].indexOf(query)>= 0)
				return true
		}
		return false;
	})
}