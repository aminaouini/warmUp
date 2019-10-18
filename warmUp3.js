// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


var people = ["hania", "fatma", "anis", "ali"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle(array) {
	return array[array.length/2];
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiplied(array){
	var resarr=[];
	for (var i = 0; i < array.length; i++) {
		if(i %2 === 0){
			resarr.push(array[i] * 2);
		}
		else {
		resarr.push(array[i]);
		}
	}
	return resarr;
}