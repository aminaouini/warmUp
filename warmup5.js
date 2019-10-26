// 1-create a data model to represent your classmates

        var classmates = [ {
        	name : "Hammam",
        	gender : "male",
        	height : "159cm",
        	age : 24,
        	hobby : "reading"}

        	{name : "Muftah",
        	gender : "male",
        	height : "165cm", 
        	age : 24
        	hobby : "maths"}

        	{name : "Salem",
        	gender : "male",
        	height : "165cm",
        	age : 22,
        	hobby : "gaming"}
        ];   


        function classmates(height, age, hobby) {


        }
         function displayFriend(mate) {
         	return "this is my friend" + " " + classmates.name + " " + "he's" + " " + classmates.age + " " + "one of his hobbies is" + " " + classmatesl.hobby
         }



 				

			

 		function addFriend(mate) { 

			for (var i = 0; i < classmates.length; i++){
                     classmates.push([mate]);
 		
 		}	}
 		  

 		  function nbOfMale(classmates){
 		  	var arr = [];
 		  	var total = 0;
 		  	for (var i = 0; i < classmates.length; i++){
 		  		if (classmates[i][key] === "male"){
 		  			total += classmates[key];

 		  		}
 		  	}
 		  	 return total;

 		  }
 		 	
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

			function searchMates(query, array) {

				for (var i = 0; i < array.length; i++) {
					if (array[i][key.age] === )
				}
			}