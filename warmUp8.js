//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(arr, subArr) {
    var match = 0
    for(var i = 0; i < subArr.length; i++) {
        var j = 0;
        while(arr.length > 0){
            if(arr[j] === subArr[i]){
                arr.splice(j);
                match++;
            }else {
                j++
            }
        }
        
    }
    if(match === subArr.length){
        return true;
    }
    return false;
}
//I couldn't solve it well, and I got confused.