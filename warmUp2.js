// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

//1.gcd

function gcd (a, b) {
	if (b === 0){
		return a;
	}	
	else {
		return gcd (b, a % b);
	}
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.

//2.sum (a , b) ... (a, b - 1)

function Sum (a, b) {
	if (b === 0){
		return a ;
	}
	else {
		return 1 + Sum(a, b - 1);
	}
}
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
