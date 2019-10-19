// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function reverseString (string){
    var str = '';
    var i =string.length-1;
    var j=0;
    while ( i >=0){
        console.log(j)
        str=str+string[i];
        str=str+j;
        j++;
        i--;}

    
    return str ;
}
function samelength(array){
    var arr=[];
    var a =0;
    for(var i = 0; i < array.length; i++){
        for(var j = i+1; j < array.length; j++){
           
            
            if(array[i].length=== array[j].length){
                
                    arr[a].push(array[i]);
                    a++
                    arr[a].push(array[j]);
                    a++
            }
        }

}
return arr;
}