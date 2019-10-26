// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(string){
	var newString = string.split('');
	var arr = 	newString.reverse();
	var i = 0;
	while( i < arr.length ){
		var reverse ='';
		var reverse = reverse +arr[i] + (i+1 );
	    	i++ ;
	}
	return reverse;
}

reverseStr('hello')


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

