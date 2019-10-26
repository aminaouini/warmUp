// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverso(string) {
    var reversedStr = "";
    var count = 1;
    var i = string.length - 1;
    while(i >= 0) {
        reversedStr = reversedStr + string[i] + count;
        i--;
        count++;
    }
    return reversedStr;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy', 'sy'] == > ["hi","hy"]

function sameLength(array) {
    var acc = [];
    var flag = false;
    var string = '';
    for (var i = 0; i < array.length; i++){
        string = array[i];
        for (var j = i + 1; j < array.length; j++){
            if (string !== array[j]){
                if (string.length === array[j].length){
                    acc.push(string)
                }
            }
        }
    }
    return acc;
}

function sameLength2(array){
    var maxLength = array[0].length;
    var minLength = array[0].length;
    for (var i = 0; i < array.length; i++) {
        if (maxLength < array[i].length) {
            maxLength = array[i].length;
        }
        if (minLength > array[i].length) {
            minLength = array[i].length;
        }

    }
    console.log(maxLength , minLength);

	for (var i = minLength; i <= maxLength; i++) {
        var sameStrArr = [];
        for (var j = 0; j < array.length; j++) {
            if (array[j].length === i) {
                sameStrArr.push(array[j])
            }
        }

        if (sameStrArr.length > 1) {
            console.log(sameStrArr);
        }
        sameStrArr = [];
    }
}