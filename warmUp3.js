// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 


var females = ["fooz","fatima","insaf"];
var males = ["hashim","ali","adam"];
var instructors = ["saif","youssif","tamara","matt"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
 function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }


function warmup(array){
	var result = [];

	each(array,function(element,i){
         if (i > 0 && i < array.length-1){
         	result.push(element)
         }
	});
	return result;
	
}

<<<<<<< HEAD
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var arr = [2,3,4,5,6,7,8];

function evenIndexes(array){
 var newArray = [];
 each(array,function(element,i){
 if( i % 2 === 0 ){
 	newArray.push(element*2)
 }
 else{
 newArray.push(element)
 }});
 return newArray;
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 23365da0003ff614627c4b0acebb2b773bb048fa
