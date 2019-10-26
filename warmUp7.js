// 1-using + operator combine your partner first and last name .

// 2-find if the number 13 is a multiple of 3 or not.

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

// 4-calculate your age in seconds.
 
// your code is here


//# 1
function partner(first,last){
	return first + last;
}
//# 2
function checkon13(){
if (13 % 3 === 0){
	return true
}
return false
}
//# 3
function average(array){
	total = 0;
	for (var i = 0 ; i <= array.length-1; i++){
    total = total + array[i] 
	}
	return total / array.length ;
}
//# 4
function calculate(age){
 	return age * 365 * 12 * 60 * 60;
 }