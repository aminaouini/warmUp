// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

//Factory function
function classMates(name, age, gender, height){
	return {
		name: name,
		age: age,
		gender: gender,
		height: height
	}
}

//Objects
var hashem = classMates('hashem', '21', 'male', 160);
var mahdi = classMates('mahdi', '33', 'male', 180);
var insaf = classMates('insaf', '26', 'female', 150);
var malik = classMates('malik', '22', 'male', 170);

//Array of objects
var classMate = [hashem, mahdi, insaf, malik];

// Display function
function dislpayFriend(mate){
	return 'Name : ' + mate.name + '\n' + 'Age : ' + mate.age + '\n' + 'Gender : ' + mate.gender + '\n' + 'Height : ' + mate.height + 'cm';
}

//add Friend Function 
function addFriend(mate){
	classMate.push(mate);
	return classMate;
}

// Number Of Males
function nbOfMale(array){
	var counter = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i].gender === 'male'){
			counter++;
		}
	}
	return counter;
}

// Search Function
function searchMates(query, array){
	for(var i = 0; i < array.length; i++){
		if(array[i].name === query){
			return 'Matching'
		}
	}

	return 'Not Matched'
}