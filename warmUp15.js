// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(str) {
	var newStr = "";

	for (var i = str.split(' ').length + 1; i >= 0; i--) {
		if (i === str.split(' ').length + 1) {
			newStr = newStr + str.split(' ')[i]
		}
		if (i >= 0) {
			newStr = newStr + " " + str.split(' ')[i]
		}
		
	}

	return newStr
}


function split(string, character) {
	var arr = [];
	var str = "";

	for (var i = 0; i < string.length; i++) {
			if (string[i] !== character){
				str = str + string[i]
			}
			if (string[i] === character) {
				arr.push(str);
				str = "";
			}
	}

	return arr;	
}

function reverseStr1(str) {

}

