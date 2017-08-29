console.log('It works!');

// enum
enum Color {
  Gray,
  Green,
  Blue
}

let myColor: Color = Color.Green;
console.log('myColor', myColor);

// any
let car: any = "BMW"
console.log('car', car);

car = {brand: "BMW", series: 3};
console.log('car', car);

  var myName = 'Dave';
// functions
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

let myMultiply: (a:number, b:number) => number;

myMultiply = multiply;
console.log(myMultiply(2,10))

// objects
let userData: { name: string, age: number} = {
  name: "Dave",
  age: 58
};

// Complex object

let complex: {data:number[], output:(all:boolean)=>number[]} = {
  data: [100, 3.99, 10],
  output: function (all:boolean):number[] {
    return this.data;
  }
}

// type alias

type Complex = {data:number[], output:(all:boolean)=>number[]}; 

let complex2: Complex= {
  data: [100, 3.99, 10],
  output: function (all:boolean):number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: string | number = 27
myRealRealAge ="twenty-seven"


// check types 
let finalValue = "A string";
if (typeof finalValue == "string"){
  console.log('finalValue', finalValue);
}

// never type
// this function never returns anything. It returns an error
function neverReturns():never {
  throw new Error('An error!');
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
  // this one's value is undefined
  let canAlsoBeNull;
  canAlsoBeNull = null;

  let canThisBeAny = null;
  //canThisBeAny = 12;
  let canThisBeAny2: number | null = null;

 type bankAccount = { money: number, deposit:(value:number)=> void}
  let bankAccount:bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
 
let myself: {name: string, bankAccount: bankAccount, hobbies:string[]}= {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself.bankAccount);