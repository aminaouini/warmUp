// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function classMate(name, gender, nationality){
    return {
        name: name,
        gender: gender,
        nationality: nationality
    }
}
var hashem = classMate('Hashem', 'male', 'Libyan');
var insafe = classMate('Insafe', 'female', 'Tunisian');
var ali = classMate('Ali', 'male', 'Libyan');

var classMates = [hashem , insafe, ali];

function displayFriend(classMate){
    return 'name: ' + classMate.name + '\ngender ' + classMate.gender +
     '\nnationality ' + classMate.nationality;
}

function addFriend(classMate){
    classMates.push(classMate);
}

function nbOfMale(array){
    var counter = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].gender === 'male'){
            counter++;
        }
    }
    return counter;
}

function searchMates(array, query){
    for(var i = 0; i < array.length; i++){
        if(array[i].name === query) {
            return array[i];
        }
    }
}

