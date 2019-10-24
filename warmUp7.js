// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


//1-
var first ='Mohamed';
var last = 'fareed';
var fullName = first +' '+ last;


//2-
function ChekMultiple(number) {
	if(number % 3 ===0){
		return true;
	}
	return false
}
ChekMultiple(13);


//3-

var ages = [13,14,13,15,16,17,19,13,16,15]
function average(ages){
var avreg = 0;
var sum = 0;
for (var i = 0; i < ages.length; i++) {
	sum += ages[i];
	}
	return avreg = sum / ages.length;
}
average(ages);


//4-
var age =33;
function ageInSeconds(age) {
	return ages*360*12*60;
}

ageInSeconds(age);