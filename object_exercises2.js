var spiderman = {
    name: 'Spiderman',
    realName: 'Peter Parker'
};
var superman = {
    name: 'Superman',
    realName: 'Clark Kent'
};

function sayHi() {
    console.log('I am ' + this.name + '!');
}
function revealIdentity() {
  console.log('My real name is ' + this.realName + '.');
}
//
// spiderman.sayHi = sayHi;
// superman.sayHi = sayHi;
// revealIdentity.apply(spiderman);
// revealIdentity.apply(superman);


var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function() {
    console.log('My name is ' + this.firstName + ' ' + this.lastName + '. I have ' + this.eyeColor + ' eyes and ' + this.hairColor + ' hair.');
  }
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};
daughter.__proto__ = mom;


function Person(name) {
  this.name = name;
  this.friends = [];
  this.addFriend = function(friend) {
      this.friends.push(friend);
  },
  this.createGreeting = function(other) {
      return 'Yo ' + other.name + '! from ' + this.name + '.';
  },
  this.greet = function(other) {
      console.log(this.createGreeting(other));
  }
}

function createPerson(name) {
    var person = {
        name: name,
        friends: []
    };

    person.addFriend = function(friend) {
        this.friends.push(friend);
    };
    person.listFriends = function() {
        this.friends.forEach(function(friend) {
            console.log(friend.name);
        });
    };
    person.createGreetingsForFriends = function() {
        var greetings = [];
        var self = this;
        this.friends.map(function(friend) {
            greetings.push('Yo ' + friend.name + '! from ' + self.name + ".");
        });
        console.log(greetings);
    };
    person.createGreeting = function(other) {
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    };
    person.greet = function(other) {
        console.log(this.createGreeting(other));
    };
    person.lazyGreet = function() {
        var self = this;
        setTimeout(function() {
            console.log('Hello, I am ' + self.name + '.');
        }, 5000);
    };
    return person;
}

var julie = createPerson('Julie');
var emily = createPerson('Emily');
var caroline = createPerson('Caroline');
var katie = createPerson('Katie');
julie.addFriend(emily);
julie.addFriend(caroline);
julie.addFriend(katie);
julie.listFriends();
