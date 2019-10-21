// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function  reverseStr(array){
	var arr = []; 
	var x = 0;
	for (let i = 0; i<array.length; i++){

	
		for (let j = 0; j<array[i].length; j++){
			if (array.length === araay[i].length)

				arr.push([i])
				arr.push([j])}
			}
	}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameNoOfChr(array){
	
	var arr = []; 
	for (let i = 0; i <array.length; i++){
		for (let j = i + 1; j <array.length; j = i +1){
			if (array[j].length === array[i].length){
				arr.push([i])
				arr.push([j])
			}
		}
	}
	return arr;
}
