// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function makeClassmate (firstName, lastName, age, gender ){
    var classMate ={
        firstName:firstName,
        lastName:lastName,
        age:age,
        gender,gender
    }
    return classMate;

}


function displayFriend(mate){
    return 'my classmates"s name is ' +mate.firstName+' '+mate.lastName+' is a '+mate.gender+' and '+mate.age+' years old';
}
var classMates=[
    {firstName:'amine',lastName:'slaimia',age:25,gender:'male'}
]

function addFriend (mate){
    classMates.push(mate);
}
function searchMates (array, queryLastName){
    for (var i in array){
        if(array[i].lastName===queryLastName)
        return array[i];
        else return 'this mate is not found'
    }

}