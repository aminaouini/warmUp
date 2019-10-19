// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str) {
	var splited = str.split('');
	var counter = str.length;
	var j = 1;
	var result = '';

	while(counter > 0){
		result = result + splited[counter-1] + j; 
		counter--;
		j++;
	}

	return result;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

// First get the length of all elements in an object index:length
// Compare the lengths on the objects 
function strSameLength(arr) {
	var result = {};
	var lengths = {};

	for(var i in arr){
		lengths[i] = arr[i].length;
		if(typeof result[lengths[i]] !==='number'){
			result[lengths[i]] = 1;
		} else{
			result[lengths[i]]++;
		}
	}

	for(var i in lengths){
		// if(lengths[i] === )
	}
	console.log(lengths, result)
}