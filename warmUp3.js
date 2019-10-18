// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var instructors = ['Matt', 'Youssef', 'Seif', ''];
var females = ['female1', 'female2', 'female3', 'female4', 'female5'];
var males = ['male1', 'male2', 'male3', 'male3', 'male4', 'male5'];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
/*[0, 1, 2, 3, 4,] === array.pop(); array.shift; */
function returnMiddle(array){
	var mid = 0;
	for (i = 0; i < array.length; i++){
			if (array.length !== 1){
			array.pop();
			array.shift();
			} 
	}return array;
}



// 3-Change all the numbers in the array to be multiplied by two for even indexes.
/*for (){if i % 2 === 0 {array[i] = array[i] * 2}}*/
function multiplyEven(array){
	for (i = 0; i < array.length; i++){
		if (i % 2 === 0){
			array[i] = array[i] * 2;
		}
	}
}