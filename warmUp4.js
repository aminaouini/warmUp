// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str) {
	var myString = ""; 

	for(var i = 0; i < str.length; i++) {
		if(str.length % 2 === 0) {
			myString += str[str.length - 1 - i] + i;	
		} else if(str.length % 2 !== 0) {
			myString += str[str.length - 1 - i] + i;		 
	} 
		}

		return myString;
};

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"] 

function returnStringsWithEqualLengths(array) {

	for(var i = 0; i < array.length; i++ ) {
		if(typeof array[i] !== "string"){
			return "please make all the elements of your arrays as strings and try again"
		}
	}
};