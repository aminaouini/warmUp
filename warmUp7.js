// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
//1
console.log('amine'+'slaimia');
//2
consol.log(13 % 3 === 0);
//3
function average () {
    var arr= [13,14,13,15,16,17,19,13,16,15];
   var sum=0;
    for (var i in arr){
        sum= sum + arr[i];
    }
    return sum/ arr.length;
}
//4
console.log('my age is '+25*365*24*60+' seconds');
