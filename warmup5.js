// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.




Factory function
function classMates(firstName, lastName, age, country, gender){
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        country: country,
        gender: gender
    }
}


/*---- */


var first1 = classMates('ons', 'rahmani', 31, 'tunisia', 'female');
var second2 = classMates('insaf', 'mechrgui', 26, 'tunisia', 'female');
var third3 = classMates('fooz', 'barakat', 24, 'lybia', 'female');
var fourth4 = classmates('dhia', 'weslati', 20, 'tunisia', 'male');


/* --- */


var classMate = ['ons', 'insaf', 'fooz', 'dhia'];






/* ---- */
function nbOfMale(array){
    var counter = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].gender === 'male'){
            counter++;
        }
    }
    return counter;
}

