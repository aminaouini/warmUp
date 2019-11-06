// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
​
​
function reverseSplit(string, character) {
	var arr = [];
	var str = "";
​
	for (var i = 0; i < string.length; i++) {
		if (string[i] !== character){
			str = str + string[i];		
		}
​
		if (string[i] === character) {
			arr.unshift(str);
			str = "";
		}
	}
	arr.unshift(str);
​
	return arr;	
}
​
function reverseStr(str) {
​
	var newStr = "";
​
	for (var i = 0; i < reverseSplit(str, " ").length; i++) {
		if(i === reverseSplit(str, " ").length-1){
			newStr = newStr + reverseSplit(str, " ")[i]
		}
		if (i < reverseSplit(str, " ").length-1) {
			newStr = newStr + reverseSplit(str, " ")[i] + " ";
		}
		
		console.log(newStr)
​
	}
​
	return newStr;
​
}