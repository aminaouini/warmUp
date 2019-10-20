// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
classinfo = [{females:["elzawi","elmortadah","jaghfer"]},{males:['muftah','hamam','mohamed']},{instructors:'yousef','saif'}]
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
<<<<<<< HEAD
function arrayMiddle(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
  if ( array.length%2 === 0) {
    if ((array.length/2) === i) {
      arr.push(array[i])
    }
  }
  if (i === Math.floor(array.length/2)){
    arr.push(array[i])
  }
  }
  return arr
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function  multipliedEven(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
  if(typeof array[i] === "number"){
    if (i%2 === 0){
      arr.push(array[i]*2)
    }
  }
  }
  return arr
}
=======

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
