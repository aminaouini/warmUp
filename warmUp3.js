// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// Global Arrays
var femalesArr = ['insaf', 'fatima', 'ons', 'hania', 'fozz'];
var malesArr = ['Hashem', 'malik', 'farouk', 'amin', 'hani'];
var classInstructors = ['yousef', 'seif', 'omar'];
var numberArr = [1, 2, 3, 4, 5];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleElement(array){
	var middle = (array.length - 1) / 2;
	return array[middle];
}


// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiplyBy2(array){
	for(var i = 0; i < array.length; i++){
		if(i % 2 === 0){
			array[i] = array[i] * 2;
		}
	}
	return array;
}

