//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false





function isSubset(arr, sub){

	var acc = [];

	for (var i = 0; i <sub.length; i++) {
		for (var j = 0; j < arr.length; j++) {

		   	if (sub[i]===arr[j]){
		   		acc.push(sub[i])
			} 

	   	}
	}

	if (acc.length===sub.length) {
		return true;
	}else{
		return false
	}
}