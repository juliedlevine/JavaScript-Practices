// Phonebook
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

// Print Elizabeth's phone number
// console.log(phonebookDict.Elizabeth);


// Add an entry to the dictionary
phonebookDict.Kareem = '938-489-1234';


// Delete Alice's phonebook entry
delete phonebookDict.Alice;


// Use a for...in loop to print all the phone entries.
function printPhonebook(){
    for (var entry in phonebookDict) {
        var phoneNumber = phonebookDict[entry];
        console.log(entry + ': ' + phoneNumber);
    }
}


// Change bob's phone number
phonebookDict.Bob = '968-345-2345';
// printPhonebook();


// Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry.
var personName = 'Elizabeth';
// console.log(phonebookDict[personName]);


// Letter Histogram
// Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object.
function letterHistogram(string){
    var stringArray = string.split('');
    var stringDict = {};

    for (var i = 0; i < stringArray.length; i++) {
        // Set key to letter
        var letter = stringArray[i];
        // If the letter is not in the dictionary yet
        if ( !(letter in stringDict) ) {
            // Set the value to 1
            stringDict[letter] = 1;
        // If the letter is already in the dictionary
        } else {
            // Count up the number by one each time
            stringDict[letter] += 1;
        }
    }
    console.log(stringDict);
}
// letterHistogram('bananas');


// Word histogram
// Write a function wordHistogram which takes a string as argument and tallies the number of times each word appears in the string, and returns the tally as an object

// function wordHistogram(string){
//     var wordArray = string.split(' ');
//     var wordDict = {};
//     for (var i = 0; i < wordArray.length; i ++) {
//         var word = wordArray[i];
//         if ( !(word in wordDict) ) {
//             wordDict[word] = 1;
//         } else {
//             wordDict[word] += 1;
//         }
//     }
//     console.log(wordDict);
// }
// wordHistogram('to be or not to be');


// Bonus
// Print the top 2 most frequently used letters in the string.
function wordHistogram(string){
    var wordArray = string.split(' ');
    var wordDict = {};
    for (var i = 0; i < wordArray.length; i ++) {
        var word = wordArray[i];
        if ( !(word in wordDict) ) {
            wordDict[word] = 1;
        } else {
            wordDict[word] += 1;
        }
    }
    var sorted_array = [];
    // Add each word and count pair as an array within sorted_array
    for (var word_ in wordDict) {
        // This returns an array with all the pairs
        sorted_array.push( [word_, wordDict[word_]] );
    }
    // This method sorts the array with largest count first
    sorted_array.sort(function(word, count) {
        return count[1] - word[1];
    });
    console.log('The most used word is: ' + sorted_array[0][0]);
    console.log('The most used word is: ' + sorted_array[1][0]);
}

wordHistogram('to be or not to be or or or to');
