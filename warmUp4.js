// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(string){ //hello
	var len = string.length -1; //5
	var result  = '';
	var counter = 1;
	while(len > 0){
		result += string[len--] + '' + counter++;

	}
	return result + string[0];
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(array){
	var result = [];
	for (var index = 0; index < array.length; index++){
		for (var index2 = index+1; index2 < array.length; index2++){
			if(array[index].length === array[index2].length){
				result.push(array[index])
				result.push(array[index2])
			}

		}
	}
	return result
}