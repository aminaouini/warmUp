// 1-create a data model to represent your classmates
<<<<<<< HEAD

//     -think of different attributes of your classmates? what do all of them have ?
// [names / ages and language]
//     -create a factory function.
var newClassMate = function(name,age,language , gender){
	return {
		name: name,
		age: age,
		language: language,
		gender: gender
	}
}

var student1 = newClassMate("ahmed",25,"arabic","Male");
var student2 = newClassMate("laila",20,"french","female");


//     -create an array to hold the classmates that you created and what you created to it .  
var classmates = [student1, student2];
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(student){
	return "here is the information you requested \n" + "his/her name is "+ student.name + " \n age is: " + student.age 
	+ "the langauge is " + student.language ;
}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend(friend){
	return classmates.push(friend);
}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(array){
	var males = 0;
	for (var i = 0; i < array.length; i++){
		if(array[i].gender === "Male"){
			males = males + 1
		}
	}
	return males;
}
//     -Write a function searchMates that, given a query and an array of Mates,
// searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function searchMates(query, array){
	result = "";
	for (var i = 0; i < array.length; i++){
		if (array[i].name === query){
			return displayFriend(array[i])
		}
	}
return "not found"
}
=======
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
>>>>>>> 23365da0003ff614627c4b0acebb2b773bb048fa
