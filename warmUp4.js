// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(string) {

var	index = 0; 
var reversedString = [];
var splitted = string.split('')
var sliced;
//var poped = splitted.pop();

	while(index < string.length ){
		reversedString.push( index + splitted.pop());
		index++;
	}
	return reversedString.join('');
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameStringLength(array) {
var	similarStringlengthArr = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < i ; j++) {
		
			if(array[j].length === array[i].length) {
					(similarStringlengthArr.push(array[i] , array[j]));
			}
		}
	}
		return similarStringlengthArr;
}
////end
