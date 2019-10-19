// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverse(str){
	var result = '';
	while (){


		//str.split()=== ['']
	}
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]



function sameLength(array) {
	var same = [];
	var first = array[0];
		//each(array, function(element, i)
	for (i = 0; i < array.length; i++) {
		if (array[i].length === first.length) { //
			same.push(array[i]); 
			first = array[i];
		}
	}	
	return same;
}