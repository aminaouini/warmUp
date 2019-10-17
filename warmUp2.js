// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(x, y) {
	var i = 0;
	if(x >= y) {
		if(x % y === 0) {
			return y
		}  
		return gcd(x-b, x)
	}
	else if(x < y) {
		[x ,y] = [y, x];
        if(x % y === 0) {
			return num2
		} 
		return gcd(x-y, y)
	}
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(a,b) {
	if (b === 0 ) {
		return a
	}
	return 1 + sum(a, b - 1)
}







