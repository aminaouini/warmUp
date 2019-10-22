// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

<<<<<<< HEAD
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var arrays = ["famela1", 'female2','male1','male2','yousif','saif']

function middel(arr){
	//var tmpArr = [];
	arrLenght = arr.length - 2;
	var tmpArr =arr.splice( 1, arrLenght)
	return tmpArr;

}


function multEvenIndex(arr){
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i]=== "number" && i % 2 === 0){
			arr[i] =arr[i]* 2;
		}
	}
	
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38




​

