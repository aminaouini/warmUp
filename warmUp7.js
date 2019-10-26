
// 1-using + operator combine your partner first and last name .
function partnerName(firstName, lastName) {
var partnerName = firstName + " " + lastName;

return partnerName;
}

// 2-find if the number 13 is a multiple of 3 or not.
function num13() {
	var result = 0;

	for (var i = 0; i < 10; i++) {
		result = i * 3;
		if (result === 13) {
			return "13 is a multiple " + i + "by 3"; 
		}
	}
	return "13 is not  multiple of 3";
}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function average() {
	var arrayOfAges = [13, 14, 13, 15, 16, 17, 19, 13, 16, 15];
	var result = 0;

	for (var i = 0; i < arrayOfAges.length; i++) {
		result += arrayOfAges[i] / arrayOfAges.length;
	}

		return result;
}

// 4-calculate your age in seconds.
function ageToSeconds(age) {
	return age * 365.24 * 24 * 3600 + 'seconds';
}


// your code is here