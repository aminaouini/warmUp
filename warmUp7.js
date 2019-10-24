// 1-using + operator combine your partner first and last name .
function pairPairName(first, last) {
	return first + " " + last;
}

// 2-find if the number 13 is a multiple of 3 or not.
function isThirteenAMultipleOfThree(){
	return 13%3===0;
}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function averageAge(array){
	return array.reduce(function(acc, value){
		return acc+value;
	})
}

// 4-calculate your age in seconds.
function yourAgeInSeconds(age){
	return age*365*24*60*60;
}

