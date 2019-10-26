//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
	function isSubset(array1, array2) {
		var check = true;
		//this is array to set the value of true that I will use to check all values are true
		andOPArr = [];
		 for (var i = 0; i < array.length; i++) {
		 	for (var j = 0; j < array2.length; j++) {
				if( array1[i] === array2[j] ) {	
					andOPArr.push(true);}
			 
		} else { andOPArr.push(false);}

			} 
			for (var i = 0; i < andOPArr.length; i++) {
				if (andOPArr[i] ) {

				}
			}
		}
	
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
//
v2 
function isSubset(array1, array2) {
		var check = true;
		var i,j = 0;

		if (i>= array1.length || j >= array2.length) {

		}
		while(i< array2.length -1)
		if( array1[i] === array2[j] )
			return check && isSubset(array1.slice(1), array2.slice())
		s
	}