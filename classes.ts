// Reusable code strategies w/ Interfaces
    // Create functions that accept arguments that are type annotated w interfaces
    // Objects / classes can decide to implement a given interface to work with a function

class Vehicle {
    honk(): void {
        console.log('beebeeeeep')
    }
}

const vehicle = new Vehicle();
vehicle.honk();

// Car inherits Vehicle's methods
class Car extends Vehicle {
    private drive(): void {
        console.log('vrrRRRRRR');
    }
}

const impala = new Car();
impala.honk();

//modifiers
// public = method can be called anywhere, anytime. default.
// private = can only be called by other methods in this class
    // not security
// protected = can be called by methods in this class or by other methods in child classes
    // child classes 