
var females= ["Hania", "Fatima", "Ons", "Ruba", "Fadhila", "Rahma"];
var males = ["Ahmed", "Mohammed", "Sbeta", "Abdulsalam", "Farouq", "Abdulrahman"];
var instructors= ["Seif", "Yousef", "Tammy"];


function extract (arr){
	str= "";
	for (var i = 0; i < arr.length-1; i++) {
		if (str === ""){
			str= arr[i];
		}
		str= str+ ", " + arr[i+1];
	}
	return str;
}


function extractMiddle(arr){
	if (arr.length%2==0){
		return arr[(arr.length/2)+1]+", "+arr[(arr.length/2)+1]
	} else {
		
		return arr[(arr.length/2)-0.5];
	}
}


function evenMultiplyBy2 (arr){
	for (var i = 0; i < arr.length; i++) {
		if (i%2===0){
			 arr[i] = arr[i]*2;
		}
	}
	return arr;
}
