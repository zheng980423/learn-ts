//explicit types
let character: string;
let age: number;
let isLoggedin: boolean;

// age='sd'
age = 3
// isLoggedin='23'
isLoggedin = true


//arrays
let ninjas: string[]=[];
// ninjas = [23, 13];
// ninjas = ['yoshi']

ninjas.push('sda')


//union types
let mixed: (string | number|boolean)[] = []
mixed.push('he')
mixed.push(234)
mixed.push(false)
console.log(mixed);

let uid:(string|number)
uid = ';123';
uid = 23;
// uid=false

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = { 23};
let ninjaTwo: {
  name: string,
  age: number,
  beltColour:string
}
ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' }
// ninjaTwo = { name: 'mario', age: 20, beltColour: 'black',skill:'123' }
console.log(ninjaTwo);
