let hello: string = 'yowhatdup';
let yo: string = 'the world is yours';
console.log(hello);
console.log(yo);

const logNumber = (i: number): void => {
    console.log(i);
}

console.log(logNumber(4));

// 
let world: string;

world = 'the world is yours';
console.log(world);

// function returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// Type cant be inferred correctly, rather it might be reassigned to another type

let numberAboveZero: boolean | number = false;
numberAboveZero = 0;

const changeNumber = (a: number) => {
    numberAboveZero = false;
    return numberAboveZero;
};

console.log(changeNumber(4));



