// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name){
    this.name = name;
    this.color = "silver";
  }
  say(string) {
    return (`*~*${string}*~*`)
  }
}
  var sparkle = new Unicorn("Sparkle");
  console.log(sparkle.say(`Hello, my name is ${sparkle.name}`));



// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name, pet = "bat") {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
  }

  drink(){
    this.thirsty = false;
  }
}

var vampire1 = new Vampire("Edward", "owl");
var vampire2 = new Vampire("Bella");
console.log(vampire1);
console.log(vampire2);

vampire2.drink();
console.log(vampire2);



//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson


class Dragon{
  constructor(name, rider, color, meals){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eatCount = 0;
  }
  eat() {
    this.eatCount +=1;
    if (this.eatCount >= 4) {
        this.hungry = false;
      }
    }
    }

 var dragon1 = new Dragon("Garfield", "Lisa", "pink")
 console.log(dragon1)
 dragon1.eat();
 console.log(dragon1)
 dragon1.eat();
 dragon1.eat();
 dragon1.eat();
 dragon1.eat();
 console.log(dragon1)


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor (name, disposition) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;

  if (this.name === "Frodo") {
    this.hasRing = true;
}
}

  celebrateBirthday(){
    this.age += 1;
    if (this.age >= 101) {
      this.isOld = true;
  }
  if (this.age >= 33) {
        this.isAdult = true;
}
}
}


var hobbit1 = new Hobbit("Frodo", "happy");
console.log(hobbit1);
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
hobbit1.celebrateBirthday();
console.log(hobbit1);
