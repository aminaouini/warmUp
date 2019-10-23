// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
    function makeClassMate(name, nationality, gender, age, phone){
        return {
            name: name,
            nationality: nationality,
            gender: gender,
            age: age,
            phone: phone
        };
    }
//-create an array to hold the classmates that you created and what you 
//created to it .  
var classMates = [{ name: 'amira',  nationality: 'libyan', gender:'female', age: 23, phone: 546352635},
                  { name: 'fooz',   nationality: 'libyan', gender:'female', age: 22, phone: 534222635},
                  { name: 'wajde', nationality: 'tunsian', gender:'male', age: 24, phone: 546352635}
];
//     -write a function called displayFriend that takes a mate as 
//an argument and returns the important information in a readable way.
    function displayName(obj){
      return obj.name + ' her nationaltiy is :' + obj.nationality;
    }
// -write a function called addFriend that takes a mate as an argument and
// add it to you classMates arraya.
var mate = makeClassMate('mira', 'tunisian', 'female', 21, 9932);
var mate1 = makeClassMate('mira', 'tunisian', 'female', 21, 9932);
var mate2 = makeClassMate('mira', 'tunisian', 'female', 21, 9932);
function addFrinde(obj){
     classMates.push(obj);
     return classMates;
}
// calculate the number of male friends that your class have by writing a 
// function called nbOfMale.
function nbofMale(array){
    var numOfMale = 0;
    for(var key in array){
        if(array[key].gender === 'male'){
            numOfMale = numOfMale + 1;
        }
    }
    return numOfMale ;
}
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide 
//what way you want to write your search algorithm.
function searchMates(query, array){
    var result = '';
    for(var key in array){
        if(array[key].age === 23){
            result = age;
        }
    }
   return result;
}