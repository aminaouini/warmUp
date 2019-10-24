// 1-using + operator combine your partner first and last name .
function partnerFullName(first, last) {
	return first + ' ' + last + '.'
}
// 2-find if the number 13 is a multiple of 3 or not.
function mutipleOfThree(n) {
	var mod = n % 3;
	if (mod === 0) {
		return true;
	}else {
		return false;
	}
}
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function calcAvg(array){
	var count = 0;
	for (i=0; i < array.length; i++){
		count = count + array[i];
	}
	return count / array.length;
}
// 4-calculate your age in seconds.
function ageInSec(age) {
	return age * 365 * 24 * 60 * 60;
}

// your code is here

