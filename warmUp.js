//  Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b){
	var divisor = Math.min (a, b);
	var find = false;
		while (find == false) {
			if (((a % divisor) == 0) && ((b % divisor) == 0)){
				return divisor;
				find = true;
			}
			else {
				divisor -= 1;
	 }
	}
}
		