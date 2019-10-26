// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// spStr takes the splited string to split it into chars, i takes the length of the string to start printing from the end,
// j used to print numbers for the last index with value of 1,
// arr is an array for the last char in the string to be pushed as a first index,
function string( str ) {
	var spStr = str.split('');
	var i = spStr.length-1;
	var j = 1;
	var arr = [];

	while (i >= 0) {
		arr.push(spStr[i] + j);
		j++;
		i--;
	}

	return arr.toString();
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


// newArray takes the elements that has onother elements sharing the length,
// x has the first element,
// checking if there is onther element has the same length if so push the element to the newArray. 
function sameLength(array) {
	var newArray = [];
	var x = array[0];

	for (var i = 0; i < array.length; i++) {
		if (array[i].length === x.length) {
			newArray.push(array[i])
		}
	}

	return newArray;
}