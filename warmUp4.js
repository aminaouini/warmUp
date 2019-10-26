// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
	function reverseString(string) {

		   var x = 0; 
	
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
      	x++;
        newString += x + string[i] ;
  
    }
	
	

	return newString;

	 }

 
	


	



// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function SameLength (array) {
		var newArr = [];
		for (var i = 0; i < array.length; i++){

			for(var j = i + 1; j < array.length; j++){
			if( array[j].length === array[i].length){

		
				newArr.push(array[i]);
				newArr.push(array[j]);



			}
		}
		
		}

		

		 return newArr;
	}