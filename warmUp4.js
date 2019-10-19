// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str){
    var arr = str.split('');
    var newArr = [];
    var i = arr.length - 1;
    var a = 1;
    while(arr.length > 0){
        newArr.push(arr[i]);
        newArr.push(a)
        arr.pop(arr[i]);
        i--;
        a++;
    }
    return newArr.join('');

}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameString(arr){
    var str = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = 1; j < arr.length; j++){
            if( arr[i].length === arr[j].length){
                str.push(arr[i]);
                arr.slic(arr[i], 1)
            }
        }
    }
    return str;
}