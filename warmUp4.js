// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(string){
	var newArr = string.split('');
	var myArr = [];
	var i = newArr.length - 1;
	var j = 1;
	while(i >= 0){
		myArr.push(newArr[i], j);
		i--;
		j++;
	}
	return myArr.join('');
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array){
	var newArr = [];
	for(var i = 0; i < array.length; i++){
		for(var j = i + 1; j <= array.length; j++){
			if(array[i].length === array[j].length){
				newArr.push(array[i], array[j]);
			}
		}
	}
	return newArr;
}