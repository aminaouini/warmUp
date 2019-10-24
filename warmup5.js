// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function createClassmate(name, age, gender, education) {
	return {
		name: name,
		age: age,
		gender: gender,
		education: education
	}
}

var mate1 = createClassmate('mohamed', 30, 'male', 'college');
var mate2 = createClassmate('ali', 23, 'male', 'college');
var mate3 = createClassmate('ons', 24, 'female', 'college');

var classmates = [mate1, mate2, mate3];


function displayFriend(mate) {
	return 'Mate Name: '+ mate.name +'\nAge: '+mate.age+ 'gender' +;
} 

function addFriend(mate) {
	classmates.push(mate);
}

function nbOfMale(classmates) {
	count = 0;
	for (var i = 0; i < classmates.length; i++) {
		if(classmates[i]['gender'] === 'male'){
			count++;
		}
	}
	return 'Number of Male Classmates is: '+count;
}

function searchMates(query, classmates) {
	for (var i = 0; i < classmates.length; i++) {
		//console.log(classmates[i]['name'])
		if(classmates[i]['name'] === query){
			//console.log(classmates[i]['name'])
			return displayFriend(classmates[i]);
		}		
	}
	return 'not found';
}