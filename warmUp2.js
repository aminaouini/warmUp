// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function GreatCommonDivide(x, y, smaller){

	if (smaller===undefined){
		(x>y)? smaller=y : smaller=x;
	}
	
	if((x%smaller===0)&&(y%smaller===0))
		return smaller
	return GreatCommonDivide(x, y, --smaller);
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.

function recursiveAdd(x,y){
	if(y===0)
		return x
	return recursiveAdd(++x, --y);
}
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
