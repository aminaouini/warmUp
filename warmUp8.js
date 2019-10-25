//create a function isSubset that should take two arrays and determine whether
//the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function subset(array1, sub){
	var i = 0;
	arr  = [];
	result = '';
	while(i < array1.length) {
		if(array1[0] === sub[0]) {
           // 
           result = true ;
		} else {
			result = false ;
		}
		i++;
	}
	return arr ;
}

function isSubset(array,sub){
	var i = 0 ;
	var j = 0
	var result = '';
	 while(i < array.length) {
	 	while(j < sub.length) {
	 	if(typeof array[i] === sub[i]){
	 		result = true;
	 	}
	 	else {
	 		result = false;
	 	}
	 	j++;
	 }
	i++;
}

 return result;
}
