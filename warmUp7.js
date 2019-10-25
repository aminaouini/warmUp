// 1-using + operator combine your partner first and last name .
var firstName = 'Noor';
var lastName = 'Eldeeb';
var full name = irstName + " " + lastName;
// 2-find if the number 13 is a multiple of 3 or not.
if(13 % 3 === 0)
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

var array = [13, 14, 13, 15, 16, 17, 19, 13, 16, 15];
var result = 0 ;
for (var i = array.length - 1; i >= 0; i--) {
	result += array[i]	
}
console.log( 'average age is ' + Math.floor(result/array.length)); 
///

// 4-calculate your age in seconds.
function ageInSeconds(age) {
	return 'Your age in seconds =' + age * 365 * 24 * 60 * 60;
}
// your code is here