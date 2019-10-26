 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24

//this function will all the numbers from 1 to n using recursion ; if n is less than zero this function will return an error to the user, 
 function mult(n) {
 // your code is here
    if (n < 0) return "The number need to be a positive number";
    if (n === 0) return 0;
    if (n === 1) return 1;
    return n * mult(n - 1);
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

//this function will return a string to the user with the numbers form 1 to n while repeating the current number 
function stringWithNumbers(n) {
    var i = 2;
    var str = "1";
    if (n <= 0) return "You need to enter a number that is superior to 0"
    while(i <= n){
        str = str + " " + i + " " + i ;  
        i++;
    }
    return str;
}