// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors

var females = ['Ruba', 'Hania', 'Ons', 'Fatima'];
var males = ['Ahmed' , 'Muftah', 'Hamaam', 'Mohammed'];
var instructors = ['Seif' , 'Yousef', 'Matt', 'Hugh'];

<<<<<<< HEAD
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of
// that array.
function middleElement(array) {
    if (array.length % 2 === 0){
        return array[(array.length / 2) - 1] + ' ' + array[array.length / 2];
    }
    return array[Math.floor(array.length / 2)];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function multipliy(array) {
    for (var i = 0; i < array.length; i++){
        if (i % 2 === 0 ){
            array[i] = array[i] * 2;
        }
    }
    return array;
}
/////////////////////////////////////////
function each(array, func) {
    for (var i = 0; i < array.length; i++){
        func(array[i], i);
    }
}

function map(array, func) {
    var arr = [];
    each(array, function (element, i) {
        arr.push(func(element, i))
    });
    return arr;
}

function multiplyBy2(array) {
    return map(array, function (element, i) {
        if (i % 2 === 0) {
            return element * 2;
        } else {
            return element;
        }
    })
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
