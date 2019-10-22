// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ? //FirstName, LastName, Age, gender, 
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.



function searchMates(query, array){
	for(var i = 0; i < array.length; i ++){
		if(array[i] === query){
			return array[i];
		}
	}
}

function nbOfMale(array,element){
	nbrMale = 0;
	for (var i = 0; i<array.length; i++){
		if(array[i].gendre === 'Male'){
			nbrMale ++;
		}
	}
	return 'you have ' + nbrMale +' Male on your class'
}

function addFriend(mate){
	array.push(mate);
}

function displayFriend (mate){
	console.log('your friend is  : ' + mate.FirstName + ' ' + mate.LastName + 'and he is ' + age );
}

var mate ={firstName: 'Houda', lastName: 'Rouaissi', Age: 26, gendre : 'female'}

function createClassmate(mate){
	var array = [];
	array.push(mate);
	
	return array;
}