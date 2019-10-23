 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24

// had we started from 0 we would always return 0 through multiplication
 function mult(n) {
 var product = 1;
 for(var i = 1; i <= n; i++ ){
 	product*= i;
 }
 return product
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

//increment i when used the first time with i++, so the next call it would be the incremented value
function numberString(n){
	var i = 1;
	var result = '';
	while(i <= n){
		result+= (i++) + ' ' + i + ' '
		
	}
	return result;
}