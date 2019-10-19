// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str) {
	var myString = ""; 

	for(var i = 0; i < str.length-1; i++) {
		if(str.length % 2 === 0) {
			myString += str[str.length - 1 - i] + (i + 1);

		} else if(str.length % 2 !== 0) {
			myString += str[str.length - 1 - i] + (i + 1);		 
	} 
		}

		myString += str[0];

		return myString;
};

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"] 

function returnStringsWithEqualLengths(array) {
	var getLengths = [];
	var outputArray = []; 

	for(var i = 0; i < array.length; i++ ) {
		if(typeof array[i] !== "string"){
			return "please make all the elements of your arrays as strings and try again"
		} 
	} 

	for(var j = 0; j < array.length; j++) {
		getLengths.push(array[j].length);
		
	}

	for(var j = 0; j < getLengths.length; j++) {
	    var count = 0;
		for(var h = 0; h <= getLengths.length; h++) {
			if(getLengths[j] === getLengths[h]){
			    count++;
				
			}
			
			}
			if(count >= 2 ){
			    outputArray.push(array[j]);
		}
	}


	return outputArray;
};