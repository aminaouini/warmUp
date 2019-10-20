// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str){
	var i=0
	var revStr=""

	while	(i<str.length){
		
		revStr= revStr+str[str.length-1-i]+i;
		i++
	}
	return revStr
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

var arr =  ['hi','hello','welcome','hy'] //== > ["hi","hy"]


function equiLength(arr){

	var arr2=[];

	for (var i = 0; i < arr.length; i++) {
		arr2.push(arr[i].length);		
	}

	var newArr= []

	for (var j = 0; j < arr2.length; j++) {
		console.log("hi")

		for (var i = 1; i < arr2.length; i++) {
					if (arr2[j]===arr2[i]) {
						newArr.push(arr[j])
						newArr.push(arr[i])
						
					} 

		}
		arr.splice(j)
		arr2.splice(j)	
	}
	
 	return newArr;

}




