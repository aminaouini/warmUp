// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

[fouz, ons, insaf, rouba];
[mehdi, essam, malik, ali, hashem, dhia];
[matt, saif, yousef];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function warmUp3_2(arr){
	var newArr = [];
	var x = 0;
	if (arr.length % 2 === 0) {
		newArr.push("there is no middle element")
	}
	else if (arr.length % 2 === 1){

	}
	return newArr
}

<<<<<<< HEAD
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function warmUp3_3(arr){
	var newArr = [];
	var x = 0;
	while(x<arr.length){
		if (x % 2===0){
			newArr.push(arr[x] * 2)
		}
		else {
			newArr.push(arr[x])
		}
		x++
	}
	return newArr
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 53bc200a820913843d17cdb55e2d8c895974ce20
