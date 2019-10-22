// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

//Here is a factory function to create objects of my classmates
function classmate(firstName, middleName, lastName, age, gender, nationality){
    if(arguments.length === 5) {
        return {
            "First name" : firstName,
            "Last name" : middleName,
            Age : lastName,
            Gender : age,
            Nationality : gender
        }
    }
    return {
        "First name" : firstName,
        "Middle name" : middleName,
        "Last name" : lastName,
        Age : age,
        Gender : gender,
        Nationality : nationality
    }
}

var classmate1 = classmate("bilel", "gharbi", "27", "male", "tunisian");
var classmate2 = classmate("dhia", "riassi", "24", "male", "tunisian");
var classmate3 = classmate("farouk", "gharbi", "26", "male", "tunisian");

var classmates = [classmate1, classmate2, classmate3];

//function to display classmates
function displayFriend(classmate) {
    if (classmate["Middle name"] === undefined) {
        return classmate["First name"] + " " + classmate["Last name"] + ", " + classmate["Age"] + " years old";
    }

    return classmate["First name"] + " " + classmate["Middle name"] + " " + classmate["Last name"] + ", " + classmate["Age"] + " years old";
}

//Function to add friends
function addFriend(classmate) {
    classmates.push(classmate);
    return classmates;
}

//Calculate the number of male friends
function nbOfMale(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i]["Gender"].toLowerCase() === "male") {
            count++
        }
    }
    return count;
}

//Function to search for the first occurance of the key
function searchMates(array, key) {
    for (var i = 0; i < array.length; i++){
        if (Object.values(array[i]).indexOf(key) !== -1){
            return displayFriend(array[i])
        }
    }
    return key + " is not found";
}