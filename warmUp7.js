// 1-using + operator combine your partner first and last name .

function combine(first, last) {
	return first + ' ' + last;
}

console.log( combine('Mohamed', 'Fared') );

// 2-find if the number 13 is a multiple of 3 or not.

function multipleOfThree(number) {
  if ( number % 3 === 0 ) {
    return 'The number ' + number + ' is multiple of 3.';
  }
  return 'The number is not multiple of 3.';
}

console.log( multipleOfThree(13) );

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

function average(array) {
	var total = 0;
	for (var i =0; i < array.length; i++) {
		total = total + array[i];
	}
	return 'Average = ' + (total/array.length);
}

console.log( average([13,14,13,15,16,17,19,13,16,15]) );

// 4-calculate your age in seconds.
function ageInSeconds(age) {
	return 'Age in seconds is ' + (age * 365 * 24 * 60 * 60);
}

console.log( ageInSeconds(24) );
