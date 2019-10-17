// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
//1
function GreatestCommonDiviser(a, b) {
  if (b == 0){
    return a;
  }else{
    return gcd(b, (a % b));
  }  
}
GreatestCommonDiviser(15,3);

//2
function sum(a, b) {
	if ( b === 0) {
		return a;
	}else{
		return a + sum(b--);
	}
}
sum(5, 1);

