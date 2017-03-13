var items = [
    { name: 'Basketball', price: 15.00 },
    { name: 'Cooler', price: 8.00 },
    { name: 'Ice', price: 12.00 },
];

// MAP METHOD - Arrays only - Adds new values into a new array
// Do a function on each of the items in an array
var itemNames = items.map(function(item) {
    return item.name;
});
// prints array of item names
console.log(itemNames);



// FILTER METHOD - Arrays only - adds new values into a new array
// function used with this must return true or false
// whatever array items return true are added to the new array
var under10Items = items.filter(function(item) {
    return item.price < 10;
});
// prints array of objects that are under $10. Cannot change the output, it will be whatever the condition that it is in the array. Ex cannot access items.name to print
console.log(under10Items);



// FOR EACH METHOD - works just like a for loop
// Doesnt return anything, just does a loop
var people = ['Dom', 'Lyn', 'Kirk'];
people.forEach(function(name){
    console.log('hello ' + name);
});


// SORT METHOD
// must use a compare function which you write. must return 3 diffferent options as seen below.
// returns an array of sorted numbers
function compareNumber(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}
var myArray = [4, 2, 10, 12, 8];
myArray.sort(compareNumber);
console.log(myArray);


// REDUCE METHOD
// used with a combine function that you write. the return from that function is waht the reduce method will return.
var names = ['Dom', 'Lyn', 'Kirk'];
function reduceNames(a, b) {
    return a + ', ' + b;
}
var nameList = names.reduce(reduceNames, '');
console.log(nameList);
