//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false



function isSubset(arr1, arr2) {
	var testz = false;
	var sub = arr1;
	for (var i = 0; i< arr1.length; i++) {
			if(arr2[0] === arr1[i]){
				sub = sub.splice(i,arr1.length)
				console.log(sub)
					testz = test(sub,arr2)}
				}

				return testz


			function test(arr1, arr2) {
	var test = true;
	var sub = arr2;
	countElement =0;
	for (var i = 0; i < arr2.length; i++) {
		for (var j = 0; j< arr1.length; j++) {
			if(arr2[i] === arr1[j]){
				sub[i] = true;
				//test = true;
			}
		}
		
	}
	for (var i = 0; i < sub.length; i++) {
		if(sub[i] !== true ){
			test = false
		}
	}
	return test;
}
	
			}



//the function compare the first element of the second array with its's first equall value in the first array
// if there is match it return true other wise it will return false

isSubset( [1, 2, 3, 4 ],[ 2, 3, 4 ])