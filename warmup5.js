// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

var classmates = [];

var fac = function(name, lastname, age, sex) {
	var obj = {};
	obj['name'] = name;
	obj['lastname'] = lastname;
	obj['age'] = age;
	ovj['sex'] = sex;
	array.push(obj);
}


//[{name:, lastname:, age:, sex:},{}]
//write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
 var displayFriend = function(name) {
 	for(var i = 0; i < array.length; i++){
 		if(name === array[i]['name']){
 			console.log('name: ' + array[i]['name'] + '\n' + 'lastname: ' + array[i]['lastname'] + '\n' +
 			 'age: ' + array[i]['age']);
 		}else {
 			console.log('name is not in class');
 		}
 	}
 }



var addFriend = function(name){//{mate:}
	var obj = {};
	array.push(obj[name]);
}


// Write a function searchMates that, given a query and an array of Mates,
// //           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
