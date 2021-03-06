// Coffee Maker
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase();
    this.cream = cream;
    this.sugar = sugar;
  }

  coffeeProfile() {
    return `${this.type}: ${this.creams()}, ${this.sugars()}`;
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`;
    } else {
      return `${this.cream} cream`;
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`;
    } else {
      return `${this.sugar} sugar`;
    }
  }
}

// Write the code that makes a black coffee.
// let blackCoffee = new Coffee("black beans", 0, 0)
// console.log(blackCoffee)
// Write the code that makes a coffee with 1 cream and 2 sugars.
// let twoSugars = new Coffee("sugars", 1, 2)
// console.log(twoSugars)
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// let sweet = new Coffee("sweet", 0,2)
// console.log(sweet.coffeeProfile())
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.
class Latte {
  constructor(flavor, milkType, shots) {
    (this.flavor = flavor), (this.milkType = milkType), (this.shots = shots);
  }

  latteProfile() {
    return `this is a ${this.flavor} latte with ${this.shots} shots, with ${this.milkType} milk`;
  }
}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// let regularLatte = new Latte("regular", "none", 1);
// console.log(regularLatte);
// console.log(regularLatte.latteProfile());
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
let doubleShots = new Latte("hazlenut", "almond", 2);
console.log(doubleShots.latteProfile());
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects
