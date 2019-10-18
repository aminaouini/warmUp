// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var classfemales =['lina','roba','hania','mouna','imen','eya'];
var classmales=['amine','salim','hani','mahdi','salah','sebeta'];
var classinstructors=['seif','matt','yousef'];


function arrayMiddle(array){
    if (array.length %2===1)
    return array[(array.length-1)/2]
    else 
    return array[array.length/2]
}
function multiplyBy2 (array){
    for(var i = 0 ;i<array.length;i++){
        if (typeof (array[i])==='number'&& i % 2 === 1){
            array[i]=array[i]*2
        }
    }
    return array
}