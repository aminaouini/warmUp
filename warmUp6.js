 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
 // your code is here
}

function mult(number) {

var result = 1;
var string = []; 
var strIterator = 1 ;
	for (var i = 1; i <= number; i++) {
		result *=i;
			}
	//stating from here is the solution for question 2
while(strIterator < number) {
	if(strIterator === 1){
		string.push(1)
		strIterator++;
			} else {
				string.push(strIterator+ " "+ strIterator );
			strIterator++;
	}
		return result;
		return string.join(' ');
}
// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
 

 //The Impelentation in the first function
 function mult(number) {

var result = 1;
var string = []; 
var strIterator = 1 ;
	for (var i = 1; i <= number; i++) {
		result *=i;
			}
	
while(strIterator < number) {
	if(strIterator === 1){
		string.push(1)
		strIterator++;
			} else {
				string.push(strIterator+ " "+ strIterator );
			strIterator++;
	}
		return result;
		return string.join(' ');
}