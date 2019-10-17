// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(x,y){
	var result = 0;
	if((typeof(x) === 'number' && (typeof(y)=== 'number'))){
      if( x > y ){
      	total = x - y;
      }
      total = y - x
	}
	return total;
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

 function inc(x){
 	return x + 1;
 }
 function dec(x){
 	return x - 1;
 }

 function sum(x,y){
 	
if(y === 0){
	return x;
}
   return sum(inc(x),dec(y));
 }

 ///////////////////////////////////////////////