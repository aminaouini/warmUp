// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

var firstName = ' Youssef ' ;
var lastName = ' Rouaissi';
var partner = firstName + ' ' + lastName;

function MultpleTree(n) {
	if (n % 3 === 0){
		return n + ' is a multiple of three';
	}else {
		return n +' is not a multiple of three';
	}
}

function ageAverage(array){
	var sumAge = 0 ;
	for (var i = 0 ; i < array.length ; i ++){
		sumAge += array[i];
	}
	return sumAge / array.length;
}

function ageSecond(age){
	return 'your age in seconds is :' + (age * 365 * 24 * 60 * 60);
}

