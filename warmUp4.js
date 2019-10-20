// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reversStr(str){
  var arr = [];
  var array = [];
  var i = 0;

  arr = str.split('')
  console.log(arr.length-1)


  while (i < arr.length)  {
     
   
   array.push(arr[arr.length-(i+1)])
    array.push(i)

    i++;
  }
  return array.join(" ")
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLengthArray(array){
  var arr =[];
  
for (var i = 0; i < array.length; i++) {
 
for (var j =i+1 ; j < array.length; j++) {
  
  if (array[i].length === array[j].length){
  
    arr.push(array[i]);
    arr.push(array[j]);
}
}
}
return arr;
}