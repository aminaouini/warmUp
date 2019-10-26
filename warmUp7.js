// 1-using + operator combine your partner first and last name .
function partnerName() {

	return 'Maher' + ' ' + 'Bouzied'

}
// 2-find if the number 13 is a multiple of 3 or not.
function findMultiple(num) {

	if( num % 3 === 0){

		return num +' is a multiple of 3';

	}

	return num + ' is not a multiple of 3';
}
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function average(array) {

	var result = 0;

	for(var i = 0; i < array.length; i++) {

		result = result + array[i];

	}

	return result / array.length;
}
// 4-calculate your age in seconds.

function ageInSeconds(age) {

	return age * 365 * 24 * 60 * 60;

}

// your code is here