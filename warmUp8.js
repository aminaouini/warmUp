//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false





/*
function isSubset(array, sub) {
	
	for (i=0; i < array.length; i++) {
		for (j=0; j < sub.length; j++){
		if (sub[j] === array[i]) {
		sub.slice(j, 1);
		console.log(sub)	
	}
	}
	if (sub.length === 0) {
	return true;
	}else {
	return false
    }
	}
}
*/