//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

/*
	=== Solution Description ===
	Using reduce function in which returns a single value, the subset array elements get tested against
	the first array one by one using includes() function in which returns true if the element exist otherwise
	false.
*/

function each(arr, f) {
    for (var i in arr) {
        f(arr[i], i);
    }
}

function reduce(arr, f, acc) {
    if (acc === undefined) {
        acc = arr[0];
        arr = arr.slice(1);
    }

    each(arr, function(val, i) {
        acc = f(acc, val, i);
    });
    return acc;
}

function isSubset(arr, subset) {
    return reduce(subset, function(result, elem) {
        return result && arr.includes(elem);
    }, true);
}
