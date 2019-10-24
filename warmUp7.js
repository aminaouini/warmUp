// 1-using + operator combine your partner first and last name .
var partnerName = 'Essam' + 'Faraj'

// 2-find if the number 13 is a multiple of 3 or not.
function checkNumber13() {
    if(13 % 2 === 0){
        return true;
    }
}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function average(arr){
    var resutl = 0
    for(var i = 0; i < arr.length; i++){
        resutl += arr[i];
    }
    return resutl / arr.length;
}

// 4-calculate your age in seconds.
// your code is here
function ageInSecond(age){
    return age * 12 * 30 * 24 * 60 * 60;
}