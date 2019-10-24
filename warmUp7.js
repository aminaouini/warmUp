// 1-using + operator combine your partner first and last name .

	var firstName = 'Huda';
	var lastName = 'Ali';

	var fullName = firstName + ' ' + lastName;
	
// 2-find if the number 13 is a multiple of 3 or not.

/* === Solution Description ===
	 The multiple of a number will always generate an Integer value if
	 divied by the number. My code divides 13 by 3 and checks if the value 
	 is an integer using Number.isInteger() function.
*/

	Number.isInteger(13/3); // Returns false

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

	var ages = [13,14,13,15,16,17,19,13,16,15];
	var avgAges = 0;

	for (var i = 0; i < ages.length; i++) {
	 	avgAges += ages[i];
	 }

	 avgAges = avgAges / ages.length;

// 4-calculate your age in seconds.

	var myAge = 27;
	var myAgeInSec = myAge * 365 * 24 * 60 * 60;