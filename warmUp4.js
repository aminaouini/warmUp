// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str){
    var i = 0;
    var result = '';
    while(i < str.length){
        result += str[str.length - i - 1] + i;
        i++;
    }
    return result;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function wordsWithTheSameLength(array){
    var result = [];
    for(var i = 0; i < array.length - 1; i++){
        if(array[i].length === array[i+1].length){
            result.push(array[i]);
            result.push(array[i+1]);
        } 
    }
    return result;
}