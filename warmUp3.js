// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var femalesNames = ["Ruba", "Ons","Fatima", "Insaf"];
var malesNames = ["Bilel", "Heni", "Farouk", "Dhia"];
var instructorsNames = ["Matt", "Yousef", "Seif", "Tamara"];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle (array){
    if (array.length % 2 === 1) return array[((array.length+1)/ 2)-1]
    return array[(array.length/ 2)-1]
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
//I wrote a function that takes an array and with a for loop it check for every index if the index is even and the element is a number.
// it multiply the the element by 2 and retrun the array.
function multipliedByTwoForEvenIndexes (array){
    for (var i = 0; i < array.length; i++){
        if (i % 2 === 0 && typeof(array[i]) === "number"){
            array[i] *= 2;
        }
    }
    return array;
}