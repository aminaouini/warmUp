// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

//this function takes two positif number and then divides the first by the second, after that it takes the second number and divedes it by the rest, and takes the first rest and divdes it by the second rest and 
//do it repetedly until the rest is equal to zero, then it return it;
var gcd = function (n, m){
    if (m === 0) return n
    return gcd(m, n % m)
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly

//you can only add one at each summetion, you'll need to use recursion in this.
// this function sum add 1 to the first number and -1 to the second number. using recursion it repeat the process until m reach 0; then it return n.
var sum = function (n, m) {
    if (m === 0) return n;
    n++;
    m--;
    return sum(n, m);
}
