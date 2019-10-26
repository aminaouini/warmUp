// 1-using + operator combine your partner first and last name .

// 2-find if the number 13 is a multiple of 3 or not.

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

// 4-calculate your age in seconds.

// your code is here
var firstName = 'Farouk';
var lastName = 'Ali';
function displayName(first, last) {
	return first+" "+last;
}


function multipleOfThree(number) {
	if(number % 3 === 0){
		return 'Yes '+number+' is a multiple of 3';
	}
	else { return 'NO '+number+' is not a multiple of 3';
	}
}

function averageAge(array) {
	var average = 0;
	var count = 0;

	for(var i = 0; i < array.length; i++) {
		average += array[i];
		count++;
	}
	return average/count;
}

function ageInSeconds(number) {
	return number*365*24*60*60;
}