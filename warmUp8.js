//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

// this function checks every element in the second array if it is included in the first array or not, 
//if so change the flag variable value to true else, change it back to false 
//therfore if one of the second array elements is not found on the first array it would be false

function isSubset(array1, array2) {
	var flag = false;
	for (var i = 0; i < array2.length; i++) {
		var element = array2[i];
		if (array1.includes(array2[i])) {
			flag = true;
		} else {
			flag = false;
		}
	}
	return flag;
}