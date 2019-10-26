// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(string) {
	var str = string.split('');
	var i = string.length-1;
	var arr = [];
	var j = 1;
	while(i >= 0){
		arr.push(str[i]);
		if(i !== 0){
			arr.push(j);
		}
		j++;
		i--;
}
return arr.join('');
}

reverseStr('hello');


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


function strings(array) {
	var arr = [];
	for(var i = 0; i < array.length; i++){
		for(var j = i+1; j < array.length; j++){
			if(array[j].length === array[i].length){
				arr.push(array[j]);
				arr.push(array[i]);
			}
		}
	}
return arr;
}

strings(['hi','hello','welcome','hy']);