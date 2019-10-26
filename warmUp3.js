// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var females = ['Fatima', 'Ruba', 'Hania'];
var males = ['Ahmed', 'Omar', 'Mohammed', 'Salem'];
var instructors = ['Yousef', 'Seif', 'Matt', 'Hugh', 'Tamara'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function getMidElement(arr) {
	//Check if the input is an array else return invalid input
	if(Array.isArray(arr) && arr.length > 1){
		var arrLength = arr.length;
		if(arrLength % 2 === 0){
			var result = [];
			mid = arrLength/2;
			result.push(arr[mid-1]);
			result.push(arr[mid]);
			return result;
		}else{
			return arr[Math.round(arrLength/2) - 1];
		}
	}else{
		return 'invalid input';
	}
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function evenIndexByTwo(arr) {
	//Check if the input is an array else return invalid input
	if(Array.isArray(arr) && arr.length > 0){
		var result = [];
		for (var i in arr){
			if(i % 2 === 0){
				result.push(arr[i] * 2);
			}else{
				result.push(arr[i]);
			}
		}
		return result;
	}else{
		return 'invalid input';
	}
}

