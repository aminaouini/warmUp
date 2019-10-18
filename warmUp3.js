// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var names = ['Amera', 'Fatima', 'Ruba', 'Ons', 'Firas', 'Khoubaieb', 'Seif', 'Matt', 'Yousef'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array) {
	var middleIndex = 0
	if (array.length % 2 === 1) {
		middleIndex = Math.floor(array.length / 2);
		return array[middleIndex];
	}
	else {
		middleIndex = Math.floor(array.length / 2);
		return array[middleIndex -1] + ', ' + array[middleIndex];
	}
}

console.log(middle(names));

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var numbers= [1,1,1,1,1,1,1];

function multipliedByTwo(numbers) {
	for (var i=0; i < numbers.length; i++) {
		if (i % 2 === 0) {
			numbers[i] = numbers[i] * 2;
		}
	}
		return numbers;
}

console.log(multipliedByTwo(numbers));

