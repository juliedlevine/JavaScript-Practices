// Hello, you!
function hello(name) {
  console.log('Hello ' + name + "!");
}
// hello('Julie');


// Hello, you! Part 2
function hello(name) {
    if (!name) {
        name = 'World';
    }
    console.log('Hello ' + name + "!");
}
// hello();


// Madlib
function madlib(name, subject){
    return name + "'s favorite subject in school is " + subject + ".";
}
// madlib('Julie', 'Chemistry');


// Tip Calculator
function tipAmount(bill, service){
    var tip;
    if (service === 'good') {
        tip = 0.2 * bill;
    } else if (service === 'fair') {
        tip = 0.15 * bill;
    } else if (service == 'bad') {
        tip = 0.1 * bill;
    }
    return tip;
}
// tipAmount(100, 'good');
// tipAmount(40, 'fair');


// Tip Calculator 2
function totalAmount(bill, service){
    var total = tipAmount(bill, service) + bill;
    return total;
}
// totalAmount(100, 'good');
// totalAmount(40, 'fair');


// Tip Calculator 3
function splitAmount(bill, service, people){
    var split = totalAmount(bill, service) / people;
    return split;
}
// splitAmount(100, 'good', 5);
// splitAmount(40, 'fair', 2);


// Print Numbers with For Loop
function printNumbersFor(){
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// printNumbersFor();


// Print Numbers with While Loop
function printNumbersWhile(){
    var i = 1;
    while (i <= 10) {
        console.log(i);
        i ++;
    }
}
// printNumbersWhile();


// Print a Square
function printSquare(size){
    for (var i = 0; i < size; i++) {
        console.log('*'.repeat(size));
    }
}
// printSquare(10);


// Print a Box
function printBox(width, height){
    // Print top
    console.log('*'.repeat(width));
    // Print middle
    for (var i = 0; i < (height - 2); i++) {
        console.log('*' + ' '.repeat(width - 2) + '*');
    }
    // Print bottom
    console.log('*'.repeat(width));
}
// printBox(8, 4);


// Print a Banner
function printBanner(string){
    console.log('*'.repeat(string.length + 4));
    console.log('* ' + string + ' *');
    console.log('*'.repeat(string.length + 4));

}
// printBanner("Welcome to DigitalCrafts, it's cool here");


// Factor a Number
function factors(num){
    var factorArray = [];
    for (var factor = 0; factor <= num; factor++) {
        if (num % factor === 0) {
            factorArray.push(factor);
        }
    }
    console.log(factorArray);
}
// factors(36);


// Caesar Cipher
function letterToAscii(letter) {
    return letter.charCodeAt();
}
function asciiToLetter(number) {
    return String.fromCharCode(number);
}
function cipher(string, offset){
    var stringArray = string.split('');
    var newString = '';
    for (var i = 0; i < stringArray.length; i ++) {
        var letter = stringArray[i];
        if (letter === ' ') {
            newString += ' ';
            continue;
        }
        var codeBreak = letterToAscii(letter) + offset;
        if (codeBreak > 122) {
            codeBreak = codeBreak - 26;
        }
        newString += asciiToLetter(codeBreak);
    }
    console.log(newString);
}
// cipher('Genius without education is like silver in the mine', 13);


// Caesar Cipher 2
function decipher(code, offset){
    var stringArray = code.split('');
    var newString = '';
    for (var i = 0; i < stringArray.length; i ++) {
        var letter = stringArray[i].toLowerCase();
        if (letter === ' ') {
            newString += ' ';
            continue;
        }
        var codeBreak = letterToAscii(letter) - offset;
        if (codeBreak < 97) {
            codeBreak = codeBreak + 26;
        }
        newString += asciiToLetter(codeBreak);
    }
    console.log(newString);
}
// decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);


// Leetspeak
function leetspeak(string){
    var leetString = string.toLowerCase();
    var newString = '';
    for (var i = 0; i < leetString.length; i ++) {
        if (leetString[i] === 'a') {
            newString += '4';
        } else if (leetString[i] === 'e'){
            newString += '3';
        } else if (leetString[i] === 'g'){
            newString += '6';
        } else if (leetString[i] === 'i'){
            newString += '1';
        } else if (leetString[i] === 'o'){
            newString += '0';
        } else if (leetString[i] === 's'){
            newString += '5';
        } else if (leetString[i] === 't'){
            newString += '7';
        } else {
            newString += leetString[i];
        }
    }
    console.log(newString);
}
// leetspeak("Leet");


// Long-long Vowels
function longLongVowels(word){
    var wordString = word.toLowerCase();
    var newString = '';
    for (var i = 0; i < (wordString.length); i ++) {
        var stringToCheck = wordString[i] + wordString[i + 1];
        if (stringToCheck === 'oo') {
            newString += 'oooo';
        } else if (stringToCheck === 'ee') {
            newString += 'eeee';
        } else if (stringToCheck === 'aa') {
            newString += 'aaaa';
        } else {
            newString += wordString[i];
        }
    }
    console.log(newString);
}
// longLongVowels('good');
// longLongVowels('cheese');
// longLongVowels('man');


// Sum the Numbers
function sumNumbers(numArray){
    var sum = 0;
    for (var i = 0; i < numArray.length; i ++) {
        sum = numArray[i] + sum;
        return sum;
    }
}
// sumNumbers([1, 4, 8, 14, 33]);


// Just the positives
function positiveNumbers(numArray){
    var positives = [];
    for (var i = 0; i < numArray.length; i ++) {
        if (numArray[i] >= 0) {
            positives.push(numArray[i]);
        }
    }
    console.log(positives);
}
// positiveNumbers([1, -3, 5, -3, 0]);
// positiveNumbers([1, 2, 3]);
// positiveNumbers([-1, -2, -3]);


// Matrix Addition
function matrixAdd(matrix1, matrix2){
    newMatrix = [];
    newMatrix2 = [];
    finalMatrix = [];
    newMatrix.push(matrix1[0][0] + matrix2[0][0]);
    newMatrix.push(matrix1[0][1] + matrix2[0][1]);
    newMatrix2.push(matrix1[1][0] + matrix2[1][0]);
    newMatrix2.push(matrix1[1][1] + matrix2[1][1]);
    finalMatrix.push(newMatrix);
    finalMatrix.push(newMatrix2);
    console.log(finalMatrix);
}
// matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]);


// Rock Paper Scissors
function rockPaperScissors(player1, player2) {
    if (player1 === 'rock') {
        if (player2 === 'scissors') {
            console.log('Player 1 wins');
        } else if (player2 === 'paper') {
            console.log('Player 2 wins');
        }
    }
    if (player1 === 'scissors') {
        if (player2 === 'paper') {
            console.log('Player 1 wins');
        } else if (player2 === 'rock') {
            console.log('Player 2 wins');
        }
    }
    if (player1 === 'paper') {
        if (player2 === 'scissors') {
            console.log('Player 1 wins');
        } else if (player2 === 'rock') {
            console.log('Player 1 wins');
        }
    }
    if (player1 === player2) {
        console.log('draw');
    }

}
// rockPaperScissors('rock', 'scissors');
// rockPaperScissors('rock', 'paper');
// rockPaperScissors('paper', 'paper');


// Tic Tac Toe
function ticTacToe(board){
    var winnerFound = false;
    var tacArray = [];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            tacArray.push(board[i][j]);
        }
    }

    for (var k = 1; k < 3; k++) {
        var player;
        if (k === 1) {
            player = 'O';
        } else if (k === 2) {
            player = 'X';
        }
        if (tacArray[0] === player && tacArray[1] === player && tacArray[2] === player || tacArray[3] === player && tacArray[4] === player && tacArray[5] === player || tacArray[6] === player && tacArray[7] === player && tacArray[8] === player || tacArray[0] === player && tacArray[3] === player && tacArray[6] === player || tacArray[1] === player && tacArray[4] === player && tacArray[7] === player || tacArray[2] === player && tacArray[5] === player && tacArray[8] === player || tacArray[0] === player && tacArray[4] === player && tacArray[8] === player || tacArray[2] === player && tacArray[4] === player && tacArray[8] === player) {
            console.log(player);
            winnerFound = true;
        }
    }

    if (winnerFound === false) {
        console.log('null');
    }
}
ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ]);
ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ]);
ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ]);
