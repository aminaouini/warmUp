//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true




/*Answer*/


function isSubset(arr1, arr2){

    for (var [n] of arr2){
    	if(!arr1.has(n)){
    		return false;
    	}
    }
    return true;
    }











