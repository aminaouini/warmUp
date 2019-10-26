// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.




Solution to the first question:

//let the function gcd take on two posotive numbers a and b
//Create an array of all divisor that return an integer for both a and b
// then compare values of each array entry to find the maximum common 



Solution to the second question:

function recursionSum(a,b){
	var result=0

	if (b===0){
		return a
	}
	a++;

	return a+recursionSum(a+1,b-1);

}

=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
