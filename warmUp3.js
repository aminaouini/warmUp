// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


var females = ["Houda", "Amera" , "Hania", "Ons"];
var male = ["Anas", "Adam", "Hani"];
var instructors = ["Tamara", "Matt", "Youssef", "Seif"];

function returnMiddle(array) {
		return  array[Math.floor( (array.length-1) / 2)];
}


array = [1, 2, 3, 4];

function multipliedByTow(array){
	var result = [];
	for (var i =0 ; i < array.length ; i++){
		if (i % 2 === 0){
			result.push(array[i] * 2);
		}else {
			result.push( array [i]);
		}
	}
	return result;
}
