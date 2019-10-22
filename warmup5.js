// 1-create a data model to represent your classmates


function classmates (First_name, Last_name, Age, Gender, Education, City, Country){
	return {
		First_name: First_name,
		Last_name: Last_name,
		Age: Age,
		Gender: Gender
		Education: Education,
		City: City,
		Country: Country
		}
}



var ClassMates = [];

function displayFriend(classmate){
	return classmate[First_name] + classmate[Last_name] + " is a " + classmate[Age] + " year old " + classmate[Gender] + " with a degree in " + classmate[Education] + " from " + classmate[City] + ", " + classmate[Country]
}

function addFriend (mate){
	ClassMates.push(mate);
}

function nbOfMale (classmates){
	var acc= []
	for (var i = 0; i < classmates.length; i++) {
	 if (classmates[i][Gender]=== "Male"){
	 	acc.push(classmates[i]);
	 }
	}
	return acc.length;
}

function searchMates(attr, array) {

	var acc= []
	for (var i = 0; i < array.length; i++) {
	 for (key in array[i]) {
	 	if (array[i][key] === attr){
	 	acc.push(array[i]);
	 	}
	 }
	}
	return acc;
}
//     -Write a function searchMates that, given a query and an array of Mates,
//  searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.









