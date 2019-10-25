//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


//function works by taking each element of sub, checking if it is found within the array, and then removing it from the array.
//even if the subset has the same elements, it should have the same amount of each element as the original, thus, if we remove
//the elements frm the array, we can assert the numbers.
function isSubset(array, sub) {
	for (var val of sub){
		if(array.indexOf(val)<0)
			return false;
		array.splice(array.indexOf(val), 1);
	}
	return true;
}