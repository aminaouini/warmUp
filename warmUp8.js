//create a function isSubset that should take two arrays and determine whether the 
//second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false 

function isSubset(arrayOne, arrayTwo) {
	var check = false;
	var count = 0;
	if((!Array.isArray(arrayOne) )|| (!Array.isArray(arrayTwo))) {
		return check;
	
	} else if((Array.isArray(arrayOne) ) && (Array.isArray(arrayTwo))) {
		if(arrayOne.length < arrayTwo.length) {
		return check;
	}else if(arrayOne.length > arrayTwo.length) {
		for(var i = 0; i < arrayTwo.length; i++) {
			for(var j = 0; j < arrayOne.length; j++) {
				if(  arrayTwo[i] === arrayOne[j]  ) {
				    console.log(count);
					count += 1;
				}
			}
		}
		
		}
	}
	if(count >= arrayTwo.length) {
			check = true;
	}

	
	return check;
}