console.log('It works!');
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log('myColor', myColor);
// any
var car = "BMW";
console.log('car', car);
car = { brand: "BMW", series: 3 };
console.log('car', car);
var myName = 'Dave';
// functions
function multiply(value1, value2) {
    return value1 * value2;
}
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 10));
// objects
var userData = {
    name: "Dave",
    age: 58
};
// Complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "twenty-seven";
// check types 
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log('finalValue', finalValue);
}
// never type
// this function never returns anything. It returns an error
function neverReturns() {
    throw new Error('An error!');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
// this one's value is undefined
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
//canThisBeAny = 12;
var canThisBeAny2 = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
