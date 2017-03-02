// Positive numbers
// var numbers = [1, 2, -4, 6, -1, 9, 10, -11];
// var positives = numbers.filter(function(number){
//     return number > 0;
// });
// console.log(positives);


// Even numbers
// var numbers = [1, 2, 5, 7, 9, 10, 12, 33, 21, 5, 20];
// var evens = numbers.filter(function(number){
//     return number % 2 === 0;
// });
// console.log(evens);


//Square the numbers
// var numbers = [1, 2, 3];
// var squares = numbers.map(function(number){
//     return number * number;
// });
// console.log(squares);


// Cities 1
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// var coolCities = cities.filter(function(city){
//     return city.temperature < 70;
// });
// console.log(coolCities);


// Cities 2
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// var cityNames = cities.map(function(city){
//     return city.name;
// });
// console.log(cityNames);


// Good Job!
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
// people.forEach(function(name){
//     console.log('Good Job, ' + name + '!');
// });


// Sort an Array
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
// var alphabetical = people.sort();
// console.log(alphabetical);

// Sort by how long each name is
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
// function nameLength(a, b) {
//     return a.length - b.length;
// }
// var sortedLength = people.sort(nameLength);
// console.log(sortedLength);


// Sort an array 3
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];


// Three times
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// var printHello = function(){
//     console.log('Hello, world!');
// };
//
// call3Times(printHello);


// n times
// function callNTimes(times, callback){
//     for (var i = 0; i < times; i ++) {
//         callback();
//     }
// }
// var printHello = function(){
//     console.log('Hello, world!');
// };
// callNTimes(5, printHello);


// Sum an Array
// function sum(array){
//     var combine = function(a, b) {
//         return a + b;
//     };
//     console.log(array.reduce(combine, 0));
// }
// sum([1, 2, 3]);


// Acronym
// function acronym(array){
//     var acroList = array.reduce(function(currentValue, name){
//         return currentValue + name[0].toUpperCase();
//     }, '');
//     console.log(acroList);
// }
// acronym(['national', 'aeronautics', 'space', 'administration']);


// Bonus: forEach
// function forEach(arr, fun){
//     for (var i = 0; i < arr.length; i ++) {
//         fun(arr[i]);
//     }
// }
// var arr = [
//   { name: 'Bob' },
//   { name:'Alice' },
//   { name:'Joe' }
// ];
// var printHello = function(person) {
//     console.log('Hello, ' + person.name + '!');
// };
// forEach(arr, printHello);


// Bonus: map
// function map(arr, fun){
//     var newArray = [];
//     arr.forEach(function(name){
//         newArray.push(fun(name));
//     });
//     console.log(newArray);
// }
//
// var myArray = ['Julie', 'Toby', 'Blake'];
// function sayHello(name){
//     return 'Hello, ' + name + '!';
// }
// map(myArray, sayHello);
