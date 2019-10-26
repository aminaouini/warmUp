// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here



var partner = {firstName: "dhia", lastName: "raisi"}

function combinedName(obj){
	
	var comb = obj.firstName + " " + obj.lastName ;
	return comb;
}
.02
function avrege(array){
	var avg =0;
	for (var i = 0; i < array.length; i++){
		avg= avg + array[i];
	}
	
	return avg /array.length ;
}
function ageSecond(num){
	return num*12*24*60*60;
}