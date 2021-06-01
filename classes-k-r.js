// Coffee Maker
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }

//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// Write the code that makes a black coffee.

 //const blackCoffee = new Coffee("blackCoffee", null, null);

// console.log(blackCoffee);

// Write the code that makes a coffee with 1 cream and 2 sugars.

 //const newCoffee = new Coffee("regular Coffee", "1 cream", "2 sugars");

//newCoffee;

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

//console.log(newCoffee.coffeeProfile());

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

//   class LatteMaker {
//       constructor(flavor, milk, shots){
//           this.flavor = flavor;
//           this.milk = milk;
//           this.shots = shots;
//       }

//        LatteProfile(){
//           return `${this.flavor}, ${this.milk}, ${this.shots}` 
//        }       
//   }

//   const carmelLatte = new LatteMaker("carmel", "regular milk", "2 shots");
//   console.log(carmelLatte);

// Write a method for your Latte class that outputs the latte's profile.

//console.log(carmelLatte.LatteProfile());

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// const regularLatte = new LatteMaker("regular", "milk", "single shot");
// console.log(regularLatte.LatteProfile());


// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// const hazelnutLatte = new LatteMaker("hazelnut", "almond milk", "double shot");

// console.log(hazelnutLatte.LatteProfile());

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class VolumeOfCylinder{
    constructor(radius, height){
       this.radius = radius / 2;
       this.height = height; 
    }

    findVolume(){

       let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
       return volume.toFixed(4);
    }

}

// const volumeCylinder = new VolumeOfCylinder(9, 7);

// console.log(volumeCylinder.findVolume());


// Write the code that creates three unique cylinder objects


const cylinder1 = new VolumeOfCylinder(2, 9);
const cylinder2 = new VolumeOfCylinder(4,5);
const cylinder3 = new VolumeOfCylinder(1.2,100);

console.log(cylinder1.findVolume());
console.log(cylinder2.findVolume());
console.log(cylinder3.findVolume());