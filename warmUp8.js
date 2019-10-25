//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

var array1 = [1, 2, 3, 4];
var array2 = [ 2, 3, 4 ];
var test = array2.length;
function isSubset(array1,array2) {
	var result = 0;
	var truefalse = true;

	for (var i = 0; i <= array2.length-1; i++){
	 for (var j = 0; j <= array1.length-1; j++){
	   if(array2[i] === array1[j]){
		   result = result + 1 ; 
		   array2.shift()
		   }
      
	   }

	 }
 

	if (result === test){
     truefalse = true ;
	}else if(result !== test){
		 truefalse = false ;
	}

	return truefalse;
}
