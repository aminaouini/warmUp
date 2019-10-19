// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b){ 
	function divide(c, d, f){
		if (c % f === 0 && d % f === 0){
			return f; 

		}
		return divide(c,d,--f)



	}
	var f;
		if (a < b)
			f = a;
		else
			f = b;
		divide(a,b,f)

}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
function  sum(a, b){
	if (b === 0){
		return 0;
	}
	 return 1 + sum(a, b - 1);
}

