//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isFind(array, element){
	var find = false;
	for (var i = 0; i < array.length; i++) {
		if(array[i] === element ){
			find = true;
		}
	 
	}
	return find;
}

function isSubset( array1, array2){
	var sub = false;
	var isin = false;
	for (var i = 0; i < array1.length; i++) {
		for (var j = 0; i < array2.length; i++) {
			isin = isFind(array1, array2[j]) 
		}
		sub = sub && isin;
	}
	return sub ;
}

