// Challenges
// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car

// class Car {
//     constructor(){
        
//     }
// }
// const myCar = new Car();
// console.log(myCar);

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// class Car {
//     constructor(model){
//         this.model = model;
//     }
// }

// const myCar = new Car("generic car");
// console.log(myCar);

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// class Car {
//     constructor(model, year){
//         this.model = model;
//         this.year = year;
//     }
// }

// const myCar = new Car("generic car", "myCar year");
// console.log(myCar);

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// class Car {
//     constructor(model, year){
//         this.model = model;
//         this.year = year;
//     }

//     wheels(){
//        return 4 
//     }
// }

// const myCar = new Car("generic car", "myCar year");
// console.log(myCar.wheels());


// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla

// class Tesla extends Car {
//     constructor(){
//       super();
//     }
// }

// const myTesla = new Tesla();

// console.log(myTesla);



// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// class Tesla extends Car {
//     constructor(model){
//        super(model); 
//     }
// }

// const myTesla = new Tesla("model X");

// console.log(myTesla);




// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class


// class Tesla extends Car {
//     constructor(model, year){
//        super(model, year); 
//     }
// }

// const myTesla = new Tesla("model X", "2020");
// console.log(myTesla);

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota

// class Toyota extends Car{
//     constructor(){
//         super();
//     }
// }

// const myToyota = new Toyota();
//console.log(myToyota);


// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// class Toyota extends Car {
//     constructor(model){
//        super(model); 
//     }
// }

// const myToyota = new Toyota("Carolla");
// console.log(myToyota);

// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// class Toyota extends Car {
//     constructor(model, year){
//        super(model, year); 
//     }
// }

// const myToyota = new Toyota("Carolla", 1999);
// console.log(myToyota);


// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen

// class Volkswagen extends Car {
//     constructor(){

//     }
// }

// const myVolkswagen = new Volkswagen();

// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// class Volkswagen extends Car {
//     constructor(model){
//         super(model);
//     }
// }

//  const myVolkswagen = new Volkswagen("Jetta");

// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// class Volkswagen extends Car {
//         constructor(model, year){
//             super(model, year);
//         }
//     }
    
//      const myVolkswagen = new Volkswagen("Jetta", 2021);
//      console.log(myVolkswagen);

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.


// class Car {
//     constructor(model, year){
//         this.model = model;
//         this.year = year;
//         this.light = "off";
//     }

//     wheels(){
//        return 4 
//     }
// }

// Story: As a programmer, I can turn the lights in all my cars on and off.

// class Car {
//     constructor(model, year){
//         this.model = model;
//         this.year = year;
//         this.light = "off";
//     }

//     wheels(){
//        return 4 
//     }

//     lights(){
//         if(this.light === "off"){
//              this.light = "on";
//         } else {
//              this.light = "off";
//         }
//         return "lights switched";
//     }
// }

// const newCar = new Car("tesla", 1990);
// console.log(newCar);
//  console.log(newCar.lights());
//  console.log(newCar);
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// class Car {
//     constructor(model, year){
//         this.model = model;
//         this.year = year;
//         this.light = "off";
//         this.signal = "off";
//     }

//     wheels(){
//        return 4 
//     }

//     lights(){
//         if(this.light === "off"){
//              this.light = "on";
//         } else {
//              this.light = "off";
//         }
//         return "lights switched";
//     }
// }

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
        this.light = "off";
        this.signal = "off";
        this.speed = 0;
    }

    wheels(){
       return 4 
    }

    lights(){
        if(this.light === "off"){
             this.light = "on";
        } else {
             this.light = "off";
        }
        return "lights switched";
    }
}

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// class Tesla extends Car {
//     constructor(model, year){
//         super(model, year);
//     }

//     speedUp(){
//        return this.speed += 10; 
//     }
// }

// const myTesla = new Tesla("model x", 2021);

// console.log(myTesla.speedUp());
// console.log(myTesla.speedUp());
// console.log(myTesla);




// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// class Tesla extends Car {
//     constructor(model, year){
//         super(model, year);
//     }

//     speedUp(){
//        return this.speed += 10; 
//     }

//     braking(){
//        return this.speed -= 7; 
//     }
// }

// const myTesla = new Tesla("model x", 2021);
// console.log(myTesla.speedUp());
// console.log(myTesla.braking());

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// class Toyota extends Car {
//     constructor(model, year){
//         super(model, year);
//     }

//     speedUp(){
//         return this.speed += 5;
//     }
// }

// const myToyota = new Toyota("carolla", 1999);

// console.log(myToyota.speedUp());

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// class Toyota extends Car {
//     constructor(model, year){
//         super(model, year);
//     }

//     speedUp(){
//         return this.speed += 5;
//     }

//     slowDown(){
//         return this.speed -= 2;
//     }
// }

// const myToyota = new Toyota("carolla", 1999);

// console.log(myToyota.speedUp());
// console.log(myToyota.slowDown());

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// class Volkswagen extends Car {
//     constructor(model, year){
//         super(model, year);
//     }

//     speedUp(){
//         return this.speed += 7;
//     }
// }

// const myVolkswagen = new Volkswagen("jetta", 1999);
// console.log(myVolkswagen.speedUp());

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

class Volkswagen extends Car {
    constructor(model, year){
        super(model, year);
    }

    speedUp(){
        return this.speed += 7;
    }

    slowDown(){
        return this.speed -=5;
    }
}

const myVolkswagen = new Volkswagen("jetta", 1999);
console.log(myVolkswagen.speedUp());
console.log(myVolkswagen.slowDown());


// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes
