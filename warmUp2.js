// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function gcd(number1, number2){
	if(number2 % number1 === 0 && number2 % number2 === 0){
		return number1;
	}
	if(number2 % number1 !== 0 && number1 % number2 !== 0){
		return 1;
	}


	return number1 - gcd(number1, number2 - 1)
}

function sum(number1, number2){
	if(number2 === 0){
		return 1;
	}

	return number1 + sum(1, number2 - 1);
}

//you can only add one at each summetion, you'll need to use recursion in this.

