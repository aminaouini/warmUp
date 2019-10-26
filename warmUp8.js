//create a function isSubset that should take two arrays and determine whether
//the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function Subset(array,sub){
	var i = 0 ;
	var j = 0
	var result = '';
	 while(i < array.length) {
	 	while(j < sub.length) {
	 	if(array[i][0] === sub[j][0]){
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
// function that have same typeof number 

function isSubset(array,sub){
	var i = 0 ;
	var j = 0
	var result = '';
	 while(i < array.length) {
	 	while(j < sub.length) {
	 	if(typeof array[i] === 'number' && typeof sub[j] === 'number'){
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
