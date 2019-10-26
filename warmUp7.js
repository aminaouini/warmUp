// 1-using + operator combine your partner first and last name .
   
var first = 'Hammam';
    	var last = 'Saiiti';
    function partnerName(){
    	 
    	return first + " " last
    }
// 2-find if the number 13 is a multiple of 3 or not.
	function multipleOfThree (n) {
		
		if ( n % 3 === 0){
		   return true
		}
		else {
			return false
		}
	}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
	var arr = [13,14,13,15,16,17,19,13,16,15];

 function averageAge (array) {
 	var total = 0;
 	
 	for (var i = 0; i < array.length; i++){
 		 	
 		  total += array[i] 

 		
 			
 	}
 	return total / array.length;
 }
// 4-calculate your age in seconds.

 function myAge(number){
 	return number * 12 * 365 * 24 * 60 * 60;
 }

// your code is here