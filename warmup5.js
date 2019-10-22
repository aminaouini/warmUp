// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?  (DONE)
//     -create a factory function. (DONE)
//     -create an array to hold the classmates that you created and what you created to it . (DONE) 
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way. ( DONE)
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya done
//     -calculate the number of male friends that your class have by writing a function called nbOfMale. (DONE)
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
var arrOfClassMates = [];
function classMates(name, age, gender, major) {
 return arrOfClassMates =	
 		[	 { 
			['age']: age,
			['gender']: gender,
			['major']: major
			}
		]	
	}
////
function displayFriend(mate) {
		for (var i = 0; i < mate.length; i++) {
			
		return arrOfClassMates[i][mate]['age']  + ' ' + arrOfClassMates[i][mate]['major'] ;  
	}
}
////
function addFriend() {
	arrOfObj.push({});
}
	
	function nbOfMale(arrOfObj) {
	let	maleCounter = 0 
	for (var i = 0; i < arrOfObj.length; i++) {
		if(arrOfObj[i]["gender"] === 'male') {
			return maleCounter++;
			}
		}
	}

function searchMates(arrayofObj, query) {
var	queryArr=[];
	for (var i = 0; i < query.length; i++) {
		for( var key in arrayofObj ) {
			if (key === query[i] ) {
				console.log('Its Entering')
			 queryArr.push(arrayofObj[i][key]);
			}
		}
	}
		return queryArr;
}
arr = [{Name: 'adam', age: '18', gender: 'male'},{Name: 'ALi', age: '21', gender: 'male'}];
////THE END

