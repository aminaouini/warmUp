// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors

var femaleArray = ['Houda', 'Ruba', 'Insaf'];
var maleArraay 	= ['Mohamed', 'Adnan', 'Abdelrahman']; 
var instructors = ['Seif', 'Yousif', 'Omar'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function mid(arr){
	var mElement;
	for(var i = 0; i < arr.length; i++){
		mElement = arr.length[i] / 2;
	}	
	return mElement[i];
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var arr = [1, 3, 5, 2, 6, 3, 8];
var multipliedNums = [];

function multiNums(arr){
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'number' && i % 2 === 0){
			multipliedNums.push(arr[i] * 2);
		}
	}
	return multipliedNums;
}