// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str) {
    var result = '';
    var i = str.length;
    var x = 1;
    while (i > 0) {
        result += str[i - 1];
        if (x < str.length) {
            result += x;
        }
        i--;
        x++;
    }
    return result;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function strSameLength(arr) {
    var words = {};
    var indexOfSame;

    for (var str of arr) {
        if (Array.isArray(words[str.length])) {
            words[str.length].push(str);
            indexOfSame = str.length;
        } else {
            words[str.length] = [];
            words[str.length].push(str);
        }
    }
    return Object.values(words).filter(function(val, k) {
        return val.length >= 2;
    }).flat();
}