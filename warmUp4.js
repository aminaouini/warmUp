// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reversString(str) {
	var tmpStr = '';
	for (var i = 0; i < str.length; i++) {
		tmpStr += str[str.length-1-i]
	}
	return tmpStr +tmpStr[0]
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function equalStrings(arr) {
	var str = [];
	var tmpStr='';
	for (var i = 0; i < arr.length; i++) {
		
			if(arr[i].length === arr[i+1].length)
				
			str.push(arr[i]) 
			//str.push(arr[j])		 
			}
		
		return str
	} 
	
	function equalStrings(arr) {
	var str = [];
	arr.push('');
	var tmpStr='';
	for (var i = 0; i <= arr.length; i++) {
		if (arr[i].length === arr[i].length)
			str.push(arr[i])
			str.push(arr[i+1])
		}
		return str
	} 
	
