// 1-create a data model to represent your classmates
//  -think of different attributes of your classmates? what do all of them have ?
// {
//     name: 'Salim',
//     age: 24,
//     gender: 'male',
//     isMarried: false,
//     weight: '80 KG',
//     nationality: 'Libyan',
//     languages: ['arabic',  'english'],
//     work: [{title: 'mobile app dev', company: 'sadeem tech', isStillWorking: false}];
// }
//     -create a factory function.
function makeClassmate(name, age, gender, isMarried, weight, nationality, languages, work) {
    return {
        name: name,
        age: age,
        gender: gender,
        isMarried: isMarried,
        weight: weight,
        nationality: nationality,
        languages: languages,
        work: work
    };
}
var cm1 = makeClassmate(
    'Hammam Almurtadah',
    23, 'male',
    false,
    '75KG',
    'Libyan',
    ['English', 'Arabic'],
    [
        {
            title: 'Reporting Officer',
            company: 'Tesla',
            isStillWorking: false
        }
    ]);
var cm2 = makeClassmate(
    'Fooz Barakat',
    25,
    'female',
    false,
    '55KG',
    'Libyan',
    ['English', 'Arabic'],
    [
        {
            title: 'Mobile App Developer',
            company: 'Google',
            isStillWorking: true
        },
        {
            title: 'Backend Developer',
            company: 'Google',
            isStillWorking: true
        }
    ]);

//     -create an array to hold the classmates that you created and what you created to it .
var classmates = [cm1, cm2];
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate) {
    return 'Name: ' + mate.name + '/ Age: ' + mate.age + '/ Gender: ' + mate.gender + '/ Work Experince: ' + displayWork(mate.work);
}

function displayWork(work) {
    var str = "";
    for (var i = 0; i < work.length; i++){
        str = str + ` ${i+1} - ` + work[i].title + ' @ ' + work[i].company;
    }
    return str;
}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates array.
function addFriend(mate) {
    classmates.push(mate);
}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(classmates) {
    var count = 0;
    for (var i in classmates){
        if (classmates[i]['gender'] === "male"){
            count++;
        }
    }
    return count;
}
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function searchMates(array, query) {
    for (var i in array){
        if(array[i]['nationality'] === query){
            return array[i];
        }
    }
    return 'Sorry, Your Mate is Not Found or you dont have any friends'
}