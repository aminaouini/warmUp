// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


// factory function
function addPeople(name, age, gender, natinalty) {
  return {
    name: name,
    age: age,
    gender: gender,
    natinalty: natinalty
  }
}

var person1 = addPeople('Fooz Barakat', '24', 'female', 'Libyan');
var person2 = addPeople('Amera Ahmed', '23', 'female', 'Libyan');


// classmates
var people = [];
people.push(person1, person2);


// displayFriend
function displayFriend(object) {
  return object.name + ', ' + object.age + ', ' + object.gender + ', ' + object.natinalty + '.'
}


// addFriend
function addFriend(object) {
  people.push(object);
  return people;
}


// nbOfMale
function nbOfMale(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {      
      if ( array[i]['gender'] === 'male' ) {
        count++;
      }   
  }
  return count;
}


// searchMates
function searchMates(string, array) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    if ( array[i]['name'] === string ) {
      result = array[i]['name'] + ', ' + array[i]['age'] + ', ' + array[i]['gender'] + '.';
      return result;
    }
  }
  return 'No match';
}