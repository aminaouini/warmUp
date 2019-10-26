function uppercaseAll(arrayOfStrings) {
    if (Array.isArray(arrayOfStrings)) {
        return map(arrayOfStrings, function(str) {
            return str.toUpperCase();
        });
    }
    return 'Invalid input';
}
// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?

/* === Answer ===
	Name : nested object composed of first and last stored as strings
	Age : numeric
	Nationality : string
	Gender: string
	Pins: nested object composed of red and yellow stored as numeric,
	Friends: array of strings

*/

//     -create a factory function.

/* === Answer ===
	The factory function checks if the friends parameter is empty and in that case it 
	will create a new empty array for the student.
*/

function rbkStudent(firstName, lastName, age, nationality, gender, rPins, yPins, friends) {
    return {
        name: {
            first: firstName,
            last: lastName
        },
        age: age,
        nationality: nationality,
        gender: gender.toLowerCase(),
        pins: {
            red: rPins,
            yellow: yPins
        },
        friends: friends.length === 0 ? [] : friends
    }
}

//     -create an array to hold the classmates that you created and what you created to it .

/* === Answer ===
	Created an array and then used the factory function to create new students and at the end
	pushed them to the array of classmates.
*/

var classmates = [];

var rbkStudent1 = rbkStudent('Abdelsalam', 'Shahlol', 27, 'Libyan', 'M', 1, 0, ['Ahmed', 'Abdo']);
var rbkStudent2 = rbkStudent('Ahmed', 'Whaida', 27, 'Libyan', 'M', 0, 0, ['Abdelsalam', 'Abdo']);
var rbkStudent3 = rbkStudent('Salem', 'Alsaih', 24, 'Libyan', 'M', 0, 0, []);

classmates.push(rbkStudent1, rbkStudent2, rbkStudent3);

//     -write a function called displayFriend that takes a mate as an argument and returns the 
//		important information in a readable way.

/* === Answer ===
	The function displayFriend accepts a student parameter and prints only 
	Name, Age, Gender, Nationality, and Pins.  
*/

function displayFriend(mate) {
    return "=== RBK Student ===" + "\nName: " + mate.name.first + " " + mate.name.last + "\nAge: " + mate.age + "\nGender: " + mate.gender + "\nNationality: " + mate.nationality + "\nPins: " + "Red: " + mate.pins.red + "\tYellow: " + mate.pins.yellow + "\n=========";
}

//     -write a function called addFriend that takes a mate as an argument and add it to you classMates array.

function addFriend(mate) {
    classmates.push(mate);
}

//     -calculate the number of male friends that your class have by writing a function called nbOfMale.

function nbOfMale(classmates) {
    var result = 0;

    for (mate of classmates) {
        if (mate.gender.toLowerCase() === 'm') {
            result++;
        }
    }

    return result;
}

//     -Write a function searchMates that, given a query and an array of Mates,
//		searches the array of mates for "matching" mate. You will decide what way you want to
//	 	write your search algorithm.

function searchMates(classmates, query) {
    query = query.toLowerCase();
    return classmates.filter(function(mate) {
        if (mate.nationality.includes(query)) {
            return mate;
        } else if (mate.age === query) {
            return mate;
        } else if (mate.gender === query) {
            return mate;
        }
    });
}
