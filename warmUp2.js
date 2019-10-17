// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.


/////////////////////////////////////////////////////////------>1
function gcd (number1, number2) {
let divisor = 2;
	if(number1 % divisor == 0  && number2 % divisor == 0) {
		return 0;
		} 
	return divisor +1 && gcd(number1, number2);	
}
/////////////////////////////////////////////////////////------>2
function sum (number1, number2) {
	if(number2 === 0) {
		return number1; 
	}
		return	sum(number1 + 1 , number2 - 1)
}
//the end
