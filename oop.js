// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name){
    this.name = name;
    this.color = "silver"
  }
  say (){
    console.log(`*~*${this.name}*~*`)
  }
}
  var unicorn1 = new Unicorn("Sparkle");
  unicorn1.say();
  console.log(unicorn1);



// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name){
    this.name = name;
    this.pet = "bat";
    this.thirsty = true;
  }

  changePet(newPet) {
    this.pet = newPet;
  }
  changeThirsty(newThirsty){
    this.thirsty = false;
  }
}

var vampire1 = new Vampire("Edward");
vampire1.changeThirsty();
vampire1.changePet("cat");
console.log(vampire1)

var vampire2 = new Vampire("Bella");
console.log(vampire2)


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
  }
  changeHungry(newHungry){
    if (meals >= 4) {
        this.hungry = false;
      }
    }
    }

 var dragon1 = new Dragon("Garfield", "Lisa", "pink")
 var meals = 5
 dragon1.changeHungry();
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
  constructor (name, disposition, number) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
  }
  celebrateBirthday(newAge){
  console.log(this.age + 1)
  }

  changeIsAdult(newIsAdult){
    if (this.age >= 33) {
        this.isAdult = true;
  }
  }
  changeIsOld(newIsOld){
  if (this.age >= 101) {
      this.isOld = false;
  }
  }
  changeName(newName){
      if (this.name === "Frodo") {
        this.hasRing = false;
}
}
}


var hobbit1 = new Hobbit("Frodo", "dis");
hobbit1.changeIsAdult();
console.log(hobbit1);

var hobbit2 = new Hobbit("Sam", "dis");
hobbit1.changeIsOld();
console.log(hobbit2);

var hobbit3 = new Hobbit ("Hobby", "disp");
hobbit3.celebrateBirthday();
console.log(hobbit3);
