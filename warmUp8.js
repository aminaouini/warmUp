//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function subset(array1, array2) {

	var sub = false;
	var array3 = []

	if(array1.length < array2.length) {

		return 'Array 1 cannot be a subset of Array 2'

	}

	 for (var i = 0; i < array1.length; i++) {

		for (var j = 0; j < array2.length; j++) {

			if(array1[i] === array2[j]) {

			array3.push(array1[i]);

			}

		}

	}

	if(array3.length === array2.length || array3.length === array1.length ) {

		sub = true;

	}
	
	return sub;
}
