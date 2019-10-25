//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(array1, array2){

	for(var i = 0; i < array2.length; i++){
		for(var j = 0; j < array1.length; j++){
			if(array2[i] === array1[j]){
				array2.splice(i, 1);
			}
		}
	}

	// I don't know what i am doing wrong logically it should work

	if(array2 === []){
		return true;
	}

	return false;
}