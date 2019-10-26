// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


// 1-
var names = "Malik " + "Altawati"; 


// 2-
var str = ""; 
if(13 % 3 === 0) {
	str = "13 is dividable by 3."
}else {
	str = "13 is not dividable by 3."
} 

//3- 
var average = 0;
var array = [13,14,13,15,16,17,19,13,16,15]; 
for(var i =0; i < array.length; i++) {
	sum += array[i] / array.length;
} 

//4- 
var  age = 27 * 365 * 24 * 60 * 60 ;