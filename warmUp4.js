// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the 
//strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLengthOfString(array){
	var i = 0 ;
	var result = [];
	while(i <array.length){
       if(array[i].length == array[i].length){
         result[i] = result[i] + array[i];
         // console.log(array[i].length);
     }
       i++;
	 }

   return result ;
   // console.log(array[i]); ;
}