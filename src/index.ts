let hasValue: boolean = true;
let count: number = 11;
let single: string = 'hello';
let double: string = "hello";

const person: {
  name: string;
  age: number;
} = {
  name: 'jack',
  age: 21
}
//配列
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

//タプル
const book: [string, number, boolean] = ['business', 1500, true];

//列挙型
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'  
    
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

let unitonType: number | string = 10;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 22;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

//決して何も返さない型
function error(message: string): never {
  throw new Error(message);
}
console.log(error('this is an error'));