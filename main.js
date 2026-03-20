for (let i = 0; i < 5; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum); 

let count = 0;
while (count < 3) {
    console.log("Count: ", count)
    count++;
}
//practice
let number = 5;

while (number > 0) {
  console.log(number);
  number--;
}
let doValue = 0;

do {
    console.log("val: ", doValue);
    doValue++;
} while (doValue<3);

for (let i =0; i <10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
//practice
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  if (i === 8) {
    break;
  }
  console.log(i);
}

for (let i =1; i <=3; i++) {
    for (let j = 1; j<=3, j++;) {
        console.log(`i = ${i}, j = ${j}`)
    }
}

//practice
for (let i = 1; i <= 4; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '*';
  }
  console.log(line);
}


function sum(a,b) {
    return a+b;
}
console.log(sum(3,5));

function multiply(x,y) {
    return x*y;
}
console.log(multiply(3,4));

function sayHello(name) {
    console.log(`hello, ${name}`);
}
sayHello("Jake");
//practice
function printInfo(name, age) {
  console.log(`Имя: ${name}, Возраст: ${age}`);
}
printInfo("Анна", 25);
printInfo("Иван", 30);

function greet(name = "Гость") {
    console.log("Hi" + name);
}
greet();
greet("Neytiri");

//practice
function calculateDiscount(price, discountPercent = 10) {
  const discountAmount = price * (discountPercent / 100);
  const finalPrice = price - discountAmount;
  return finalPrice;
}
console.log(calculateDiscount(1000, 20)); 
console.log(calculateDiscount(500));       
console.log(calculateDiscount(2000, 15)); 

const add = function(a,b) {
    return a+b;
};
console.log(add(2,3));

function makeCounter() {
    let cnt = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

const sumfunc2 = (a,b) => a+b;
const double = x => x*2;
const saygreeting = () => console.log("hi");
const square = x => x*x;
const calculate = (a,b) => {
    let res = a+b;
    return res * 2;
};

let numbersArr = [1,2,3];
console.log(numbersArr);

console.log(numbersArr[0]);
console.log(numbersArr[1]);
console.log(numbersArr.length);
numbersArr.push(10);
console.log(numbersArr);
numbersArr.pop();
console.log(numbersArr);

//practice
const colors = ['красный', 'зелёный', 'синий'];
console.log('Первый элемент:', colors[0]);
console.log('Последний элемент:', colors[colors.length - 1]);
colors[1] = 'жёлтый';
console.log('Полный массив:', colors);

const students = [];
students.push('Анна');
students.push('Иван');
students.push('Мария');
students.pop();
console.log(students);

let numbers2 = [10,20,30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

for(let val of numbers2) {
    console.log(val);
}
let mixedArray = [1, "txt", true, 3.14];
console.log(mixedArray);

console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

//practice
const cities = ['Москва', 'Санкт‑Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];
const searchCity = 'Екатеринбург';
const index = cities.indexOf(searchCity);
if (index !== -1) {
  console.log(index);
}