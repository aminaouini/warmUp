// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(a, b){
    if(b === 0)
        return 0;
    return a + sum(a, b--);
}