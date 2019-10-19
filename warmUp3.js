// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var arr = ['Essam', 'Salem', 'Rahma', 'Alia', 'Matt', 'Seif'];


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(arr){
    var m = 0;
        if(arr.length % 2 === 0){
            m = arr.length / 2 + 1;
            return arr[m];
        } else{
            m = Math.ceil(arr.length /2)
        }
        return m;
}



// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function x (arr){
    for(var i=0; i<arr.length; i++){
        if(i % 2 === 0)
            arr[i] = i * 2;
    }
}