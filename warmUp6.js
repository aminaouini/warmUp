 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
 // your code is here
 var result = n;
 while(n > 1){
     n--;
     result = result * n;
 }
 return result;
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
function stringNb(n){
    result = '';
    var i = 1
    while(i <= n){
        var between = i + 1;
        result = result + i + between;
        i++;
    }
    return result;
}