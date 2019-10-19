// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
<<<<<<< HEAD
females = ['rahma', 'ouns', 'koloud'];
males = ['ahmad', 'abdlrrahman', 'ali'];
instructors = ['seif', 'yousof', 'matt'];


function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 


 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array){
	if(array.length !== 1){
		array.pop();
		array.shift();
		return map(array, function(element){
		return element;});
	}
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

numbers = [1, 2, 3 , 4, 5, 6];




function multiplybytwo(array){
		for ( var i = 0; i< array.length; i++){
		if( i%2 === 0){
		array[i] *= 2;

		}

	}

	return array;

}

multiplybytwo(numbers);
=======

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
