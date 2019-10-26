// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.

function factory(first, last, nationality, gender){
	var classmate = {
		first: first,
		last: last,
		nationality: nationality,
		gender: gender
	}

	return classmate;
}

var classmate1 = factory('Hashem', 'saleh','Libyan','male');
var classmate2 = factory('Malik', 'rudy','Libyan','male');
var classmate3 = factory('lina', 'xz','Tunisian','Female');
var classmate4 = factory('Abdlrahman', 'shibani','libyan','male');

// classmate5 is not in classmates array to test if the addFriend function work

var classmate5 = factory('Essam', 's','libyan','male');

//     -create an array to hold the classmates that you created and what you created to it .

var classmates = [classmate1, classmate2, classmate3, classmate4];

//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.

function displayFriend(mate) {
	return 'First: ' + mate.first + '\n' + 'Last: ' + mate.last + '\n' + 'nationality: ' + mate.nationality + '\n' + 'Gender: ' + mate.gender ;
}

//     -write a function called addFriend that takes a mate as an argument and add it to you classMates array.

function addFriend (mate){

	classmates.push(mate);

	return classmates;

}

//     -calculate the number of male friends that your class have by writing a function called nbOfMale.

function nbOfMale(array) {

	var count = 0;

	for (var i = 0; i < array.length; i++) {

		if (array[i].gender === 'male') {

			count ++; 

		} 

	}

	return count;
}

//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm./

function searchMates(array, query) {

	var arr = [];

	for (var i = 0; i < array.length; i++){

		if(array[i].first.toLowerCase().indexOf( query.toLowerCase() ) !== -1){

			arr.push(array[i]);

		}

	}

	return arr;

	}