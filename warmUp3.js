// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
var femaleNames = ['Ons Rahmani', 'Fooz barakat', 'Lina Ben Salem '
'Insaf Mechergui', 'ruba arif elwahieshi', 
'Hania Lazreg', 
'Amera', 
'fatima']; 
// -name of males in your class
var maleNames = [
'Mohamed Amine Slaimia',
'Guizeni Farouk',
'omar bara', 'Fares Jelassi', 
'Ghaouari Khoubaieb', 
'Bilel Gharbi', 
'Allam Chouchene', 
'Abdelly Jihed', 
'Adnen Ben Abdelaali',
'abdlrrahman shibani',
'Marzouki Anas',
'salim ali alsaeh', 
'Adnen Ben Abdelaali',
'abdlrrahman shibani',
'Marzouki Anas',
'salim ali alsaeh', 
'Mohamed Dhia Weslati',
'Hamza Danden',
'muftah elzawi',
'Mohamed Amine Eddine khadhraoui',
'Mohamed amine aouini',
'sofian',
'Maher Bouzid',
'Essam',
'hamam elmurtdh',
'Wajdi Hamrouni',
'Malik Abdullah',
'Abdelsalam shahlol',
'ahmed wheida',
'Rouaissi Houda',
'Adam Momen',
'Firas Amous',
'mohamed sbeta',
'Zied Barhoumi',
'Safi Nejah',
'Hashem Buzer',
'Ali Jalal',
'Abdo Alabed',
'Heni Mezrani',
'mohamed belkheir',
'Mehdi Farjallah',
'Taha Znazen',
'Raissi Dhia',
'Taha Mejri'];

// -name of your class instructors  
var classInstructors = ["Seif", "Yousef", "Matt", "Omar"];


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function returnMiddile(array) {	
	if(Array.isArray(array)){
		if( array.length % 2 !== 0 ){
			return array[(array.length - 1) / 2];
		}else if (array.length % 2 === 0){
			return ",";
		}

	}else{
		return "GO fetch an array ! And come back before 5 pm ."
	}
};





// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiplyNUmbersLocatedInEvenIndex(array) {	
	if(Array.isArray(array)){
		for(var i = 0;i < array.length; i++){
			if( ( typeof array[i] === "number" ) && ( i % 2 === 0 ) ) { 
				array[i] = array[i] * 2;
			};
		};

	}else{
		return "GO fetch an array ! And come back before 5 pm ."
	} 
	return array;
};