// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseString(string) {
    var newString = "";
    var count = 0;
    var i = string.length -1;

    while (i >= 0){
        newString += string[i] + count;
        count++;
        i--;
    }

    return newString;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

//this is a function that compare the length of the elements inside an array and if two or more element
//have the same length it return them in a new array
function sameLength(array) {
    var copyArray = array;
    var newArray = [];
    var count = 0;

    for (var i = 0; i < copyArray.length; i++){
        newArray.push(copyArray[i]);
        count = newArray.length;
        for (var j = i + 1; j < copyArray.length; j++){
            if(copyArray[i].length === copyArray[j].length){
                newArray.push(copyArray[j]);
                copyArray.splice(j, 1);
            }
        }
        if (newArray.length === count){
            newArray.splice(newArray.length - 1, 1)
        }
    }

    return newArray;
}