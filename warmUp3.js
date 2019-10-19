// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 


var males = ['Ahmed', 'malik', 'belal'];
var females     = ['Amira', 'Fooz', 'Rubaa']
var instructors = ['Rgda','saife'];

// 2-write a function that takes an array as an argument and returns
// the element that is located in the middle of that array.
function getMiddel(array){
	var middle = '';
	var i = 0;
	while(i < array.length){
		if(array.length%2 === 1){
			  
            middle = array[Math.floor(array.length/2)];
		}
		else if(array.length%2 === 0){
			middle = array[array.length/2 -1] + ' ' + array[array.length/2];
		}
        i++;
	}
	return middle;

}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multipayed(array){
	var i = 0;
	while(i < array.length){
	    if(array[i]%2 === 0){
		array[i] = array[i] * 2;
	  }	
	  i++;
  }
	return array;
}