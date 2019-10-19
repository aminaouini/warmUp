// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(string){
	
var i = string.length-1;
var k = 1;
var text = '';
	while(i !== -1){
		text = text +" "+ string[i]+" "+ k ;
i--
k++
	}
	console.log(text)
}

// 2-write a function that takes array of strings and returns 
//an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


var array = ['hi','hello','welcome','hy'];
function returnStr(array){
	var result = [];
	for (var i = 0; i <array.length; i++) {
		for(var k = 0; k< array.length; k++){
        if (array[i].length === array[k].length){
        	result.push(array[i],array[k])
        	array.splice(array[i])
        }
		}
	}
	return result;	
}


