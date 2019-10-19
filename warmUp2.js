




// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
<<<<<<< HEAD

function greatestCommonDivisor(a, b) {

	if (a%b === 0){
		return b;
		};

	return greatestCommonDivisor(b, a%b); 
};



// 2-Write a function called sum that accepts two numbers as parameters, 
//and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this. 

function sum(a, b) {
	
	 if(a < 0 ){
	 	
	 	return -1 + sum(a + 1, b) 
	 }
	 else if(a === 0){
	 	return b;
	 }
	 else if(a > 0){
	 	return 1 +sum(a - 1, b);
	 } else if(a === 0){
	 	return b;
	 }
};
=======
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
