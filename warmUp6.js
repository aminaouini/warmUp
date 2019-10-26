 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24

 function mult(n) {
 	var result = 1;
 	for (var i = 0; i < n; i++) { 
 		result = (i+1) * result; // Because it starts from 0, (i+1);
 	}
 	return result;
} 


// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

var stringOfN = function (n) {
	var str = '';
	while (str.length < n) {
		for (i = 1; i <= n; i++){
			if (i === n) {
				str = str + ' ' + i;
			}else {
				str = str + ' ' + i + ' ' + (i + 1);
			}
		}
	}
	return str;
}