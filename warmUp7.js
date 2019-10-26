// 1-using + operator combine your partner first and last name .
function combineNames(first, last) {
    return first + last;
}

// 2-find if the number 13 is a multiple of 3 or not.
function isMultipleOf13(number) {
    return number % 13 === 0 ;
}
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function calcAverage() {
    var array = [13,14,13,15,16,17,19,13,16,15];
    var sum = 0;
    for (var i in array){
        sum = sum + array[i];
    }
    return (sum / array.length);
}
// 4-calculate your age in seconds.
function calcAge(ageInYears) {
    return ageInYears * 365 * 24 * 60 * 60;
}
// your code is here

