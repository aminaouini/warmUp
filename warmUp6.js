 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 
 function mult(n) {
 	var tot = 1;
 	if(i > 0){
 	for (var i = 1; i < n +1; i++) {
 		tot = tot * i;
 	}
 	}
 	return tot;
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

function oneThroughn(n){
	var str="1";
	var i = 2;
	while ( i < n ){
		str = str + " " + i + " " +(i+1);
		i++;
	}
	return str; 
}
