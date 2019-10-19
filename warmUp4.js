// 1-Write a function that takes a string as an input and returns the reverse of each letter 
function reverse(string) {
	var str = [];
	var str1 = [];
	str = string.split('')
	var i = str.length -1

	while ( i >= 0){

		str1.push(str[i]);
		i--;

	}return str1.join('');

	}
//followed by a number starting from zero(solve it using while loop).
function reverse(string) {
	var str = [];
	var str1 = [];
	str = string.split('')
	var i = str.length -1
	var x = 1;

	while ( i >= 0){

		str1.push(str[i]);
		if(i !== 0){
		str1.push(x);
		}
		x++
		i--;

	}return str1.join('');

	}
	
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function theSame(array) {

	var arr = [];

	for (var i = 0; i < array.length; i++) {

		for (var j = 0; j < array.length; j++) {

			if(array[i].length === array[j].length && i !== j) {

				arr.push(array[j]);
			}
		}
	}return arr;
}
