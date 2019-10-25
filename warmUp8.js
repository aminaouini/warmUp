//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
// I used two for loops one to loop through the array and the other to loop through the sub and it is checking for the similer elements and returning the result

function isSubset(array, sub) {
	var arr = [];
	var result = '';
	for(var i = 0; i < array.length; i++) {
		for(var j = 0; j < sub.length; j++){
			if(sub[j] === array[i]) {
				arr.push(array[j]);
			}
		}
		if(arr.length === sub.length || arr.length === array.length) {
			result = true;
		}
		else {
		  	result = false;
		}
		}
		return result;
	
}

isSubset([ 1, 2, 3, 4 ], [ 2, 3, 4 ]);
isSubset([ 2, 2, 2, 3, 4 ], [ 2, 4, 3 ]);
isSubset([ 2, 3, 3, "a" ], [ 3, 3, 3, "a" ]);