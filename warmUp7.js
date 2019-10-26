// 1-using + operator combine your partner first and last name .

function plusOperator(first, last){
	return first+ " " + last;
}
// 2-find if the number 13 is a multiple of 3 or not.
function isMultipleOfThree(num){
	if (num%3===0){
		return true;
	}else{
		return false;
	}
}

isMultipleOfThree(13);

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]


function average (arr) {

	var acc=0;

	for (var i = 0; i < arr.length; i++) {
		acc=acc+arr[i]
	}

	return acc/arr.length;

}



// 4-calculate your age in seconds.
function ageInSeconds(age){
	return age*365.25*24*60*60
}


// your code is here