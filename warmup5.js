// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
var classMates = {
	highet : 
	haircolor : ['black', 'brown'],
	nationality : ['tunisian','libyan']
	gender : ['males','females']

}


function viewattributes(colleges){
	return colleges.hight + '' + colleges.haircolor + ' ' + colleges.nationality + ' ' + colleges.gender; 

}
var arr = ['nationality', 'gender'];
function displayFriend(mate){
	return mate.gender + ' ' + mate.nationality;
}

function addFriend(mate){
	var newmate = '';
	mate.push(newmate)
}
function nbOfMale(n){
	start = 0;
	for (let x in classmates){
	if ([key].gender === "male"){
		start +1;
		
	}
     	return start;
}
}
function searchMates(query,array){
	for ( let i = 0; i<array.length ; i++)
		if (array[i]['hight'] === query ){
			return  "averagehight";
		}

		return "we do not have a student with such hight"
}
