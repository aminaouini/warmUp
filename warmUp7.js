// 1-using + operator combine your partner first and last name .
function partnerName ( first, last ) {

return first + " " + last;

}
// 2-find if the number 13 is a multiple of 3 or not.
function multipleOfThree (n) {
	if ( n % 3 === 0) {

		return true;

	}

	return false ;

}
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function averageAge ( array ) {
	var sumAge = 0

	for (var i = 0; i < array.length; i++) {

		 sumAge += array[i];

	}

	return sumAge / array.length;

}
// 4-calculate your age in seconds.
function ageSeconds ( age ) {

	return age * 365 * 24 * 60;
	
}

// your code is here