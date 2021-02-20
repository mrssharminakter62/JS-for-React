// Destructuring an arry----
const numbers =[45, 54]
// const x = numbers[0];
// const y = numbers[1];
console.log(x, y);

const [x, y] =[45, 54];

const [x, y] = numbers;
console.log(x, y);

// Des with function---
function boxify(num1){
    return [num1, num1 + 5, num1 - 3];
}
const boxed = boxify(10);
console.log(boxed);

const [state1, state2] = boxify(12);
console.log(state1, state2);

//If I create new array using three dots----
const newNumbers = [...numbers, 55];
 
// If I push new element of previous arry------

numbers.push(55);


// Object Destructuring------------

const {name, age, money} = {id: 1, name: 'Abir', money:400, age: 20};
console.log(name, age);
console.log(name, money);

const person ={id: 1, name: 'Abir', money:400, age: 20};
const {money} = person;
console.log(money);*/

// create Object shortcut-----
const x = 25;
const y = 35;
const obj = {x:x, y:y};
console.log(obj);

// another---
const one = 45;
const two = 53;
const obj1 = {one, two}
console.log(obj1);


