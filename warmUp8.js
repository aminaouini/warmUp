//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function each(array, f){
    for(var i = 0; i < array.length; i++){
        f(array[i],i)
    }
}

function reduce(array, f, initial){
    var acc = initial;
    each(array, function(elm){
        acc = f(acc, elm);
    });
    return acc; 
}

//I used array.indexOf() to find if the elements of the sub array are present inside the big array or not.
function isSubset(array, sub){
    if (sub.length >= array.length) {
        return false;
    }
    return reduce(sub, function(acc, elm){
        return acc && (array.indexOf(elm) > -1);
    },true)
}