// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females = ['Ons', 'Ensaf', 'Hania'];
var male = ['Abd Alrahman', 'Hashem', 'Ali', 'Malik', 'Adam'];
var instructors = ['Tamara', 'Saif', 'Yousef','Matt'];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
<<<<<<< HEAD
function returns(array){
	var i = array.length - 1;
	if(i % 2 === 0){
			return array[i/2]
		}else {
			i++;
			return array[i/2] + ' ' + array[(i-2)/2];
		}
	}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var num = [1, 2, 3, 4];
function Multiply(array){
	for (var i = 0; i < array.length; i++){
		if(i % 2 === 0){
			array[i] = array[i] * 2;
		}
	}return array;
}
=======

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
