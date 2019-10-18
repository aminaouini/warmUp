// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var femaleClassmates = ['Ruba', 'Amera', 'Ensaf', 'Uns'];
var maleClassmates = ['Hashem', 'Salem', 'Heni', 'Hammam', 'Muftah', 'Malik'];
var instructors = ['Matt', 'Seif', 'Yousef'];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleElement(array){
	return array[Math.floor(array.length/2)]
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function twoXEven(array){
	return array.map(function(element, index){
		if(index%2===0)
			return element*2
		return element
	})
}