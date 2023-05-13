"use strict";
let hasValue = true;
let count = 11;
let single = 'hello';
let double = "hello";
const person = {
    name: 'jack',
    age: 21
};
//配列
const fruits = ['Apple', 'Banana', 'Grape'];
//タプル
const book = ['business', 1500, true];
//列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
let unitonType = 10;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 22;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
//決して何も返さない型
function error(message) {
    throw new Error(message);
}
console.log(error('this is an error'));
