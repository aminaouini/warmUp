// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


function reverse (string){
	var result="";
	i=0 ;
	while(i<string.length){
		result=result+(i)+string[string.length-1-i];
		i++
	}
	return result;
}


function same (array){
	var arr=[];
	
	for (var i=0; i<array.length;i++ ){
		for(let j =i + 1; j < array.length; j++ )
		if (array[j].length === array[i].length){
			arr.push(array[i])
			arr.push(array[j])
		}
	}
	return arr
}