
 mult(3); // => 6
 mult(4); // => 24
 
 function mult(n) {
 	var total= 1;
 	for (var i = 1; i <= n; i++) {
		total=total*i
	}
	return total
	}


function stringy(n){

	var i=1
	var str='';

	while (n>=i){
		if (i===1){
			str=str+i;
			i++
		} else {
			str=str+i+i;
			i++;
		}
	}
	return str;
}