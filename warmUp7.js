// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

// 4-calculate your age in seconds.

// your code is here
function avreg(array){
	var i = 0;
	var result = 0;
	while(i < array.length) {
		result = result + array[i];
		i++;
	}
	return  result  / array.length;
}
// My average age
// var myage = [4,10,10];
function myAvergeAge(array) {
	var i = 0;
	var result = 0 ;
	while(i < array.length) {
		result = result + array[i];
       i++;
	}
	return result / array.length ;
}

function parentname(first,last){
	return 'my father name is : ' + first + ' '+ last ;
}
// Or just in cosole : 
'Mabrouk' + ' ' + 'Omer';

// find if the number 13 is a multiple of 3 or not
 if(13 % 3 === 0){
 	return true ;
 }
 else {
 	return fales;
 }


