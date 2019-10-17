// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters,
// and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.


function gcd (x,y){
    if (x % y === 0 ){
        return y;
    }
    return gcd(y , x % y);
}

/////////////////////////////////////////////////

function sum2(x , y) {
    if (x === 0){
        return y;
    }
    return sum(--x, ++y)
}

/////////////////////////////////////////////////

function inc(y) {
    return y = y + 1;
}
function dec(x) {
    return x = x - 1;
}

function sum(x , y) {
    if (x === 0){
        return y;
    }
    return sum(dec(x), inc(y))
}





