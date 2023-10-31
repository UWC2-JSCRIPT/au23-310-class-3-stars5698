// Donna Quach, JavaScript 310B, Autumn 2023
// Class 3 Exercises 

// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class Spaceship {
    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }

    // const {name, topSpeed} allows for the assignment of multiple variables at once 
    // Source: https://stackoverflow.com/questions/41058569/what-is-the-difference-between-const-and-const-in-javascript 
    accelerate() {
        const{name, topSpeed} = this; 
        console.log(`${name} moving to ${topSpeed}`);
    };
}; 


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const shipOne = new Spaceship('shipOne', 100); 
const shipTwo = new Spaceship('shipTwo', 200);

shipOne.accelerate();
shipTwo.accelerate();