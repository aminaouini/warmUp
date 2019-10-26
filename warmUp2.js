// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
var i = 1;
function common(a, b){

	if (b === 0 || a === 0){
		return a;
	}
	if(a % i === 0 && b % i === 0 ){
		return common(a,b)
	}

}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(a,b){
	if(b < 0){
		return a - sum(a ,b+1)
	}
	if (b === 0){
		return a;
	}return a + sum(a,b-1);
}

=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
