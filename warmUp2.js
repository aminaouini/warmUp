// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(num1,num2) {
	if(num1 < 0 || num2 < 0){
		return 'numbers should be positive';
	}
	if(num1 < num2){
		return num1;
	}else if(num1 === num2){
		return num1;
	}
	return gcd(num1-num2,num2);
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(num1, num2) {
	if(num2===0){
		return num1;
	}
	return sum(num1 + 1,num2 - 1);
}