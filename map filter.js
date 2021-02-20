const numbers1 =[34, 24, 56, 56];
const friends =['Zamal', 'Sharmin', 'Saad', 'Muaaz'];
const products = [
    {id: 1, name: 'laptop', price:1200},
    {id: 2, name:'Mobile', price:500}, 
    {id: 3, name:'watch', price: 200},
    {id: 4, name:'tablet', price: 200}
];

// map___________
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
const prices2 = products.map(pd =>{
    // do some work
   return  pd.price
});

console.log(names);
console.log(prices)

// forEach______________
products.forEach(product=> console.log(product.name));

// fiter________
const cheaper = products.filter(pd =>pd.price < 500);
console.log(cheaper);

// remove an item using filter____________
const remaining = products.filter(pd =>pd.id != 4);
console.log(remaining);

// find_______
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);

// for array need (map, filter, forEach, reduce,  includes, push, pop, length, indexof)