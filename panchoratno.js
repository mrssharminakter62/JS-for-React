// Variable Decleare______________let, const

let myMoney = 100;
let myLife = "I am a house wife.";
let isConfident = true;
console.log(myLife);

// Dainamic String templete_______________________________

/*const myName = "Muaaz";
const person = {
    name = 'Saad',
    age = 12,
    city = 'Comilla'
}
const statement =`this person ${name} with age ${person.age}`;*/

// Condition___________
let money = 30;
let age = 45;
if(money > 20 && age < 45){
    console.log('He is perpect')
}
else{
    console.log('He is not perpect');
}

// Array_________________
const numbers =[34, 24, 56, 56];
const myFamily =['Zamal', 'Sharmin', 'Saad', 'Muaaz'];
const products = [{name: 'laptop', price:1200}, {name:'Mobile', price:500}, {name:'watch', price: 200}];
// loop__________________

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// function: regular arrow___________________

function add(num1, num2){
    return num1 + num2;
}
const result = add(23, 43);
console.log(result);

// Arrow____________

const fiveItems = num => num * 5;
const add2 =(num1, num2) =>num1 + num2;
const doMath = (x, y) => {
    const sum = x + y;
    return sum * 2;
}