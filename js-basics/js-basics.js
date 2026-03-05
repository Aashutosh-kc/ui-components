
// JS Fundamentals Practice — arrays, objects, map, filter, forEach
const students = [
    { name: "Aashutosh", score: 78 },
    { name: "Ram", score: 35 },
    { name: "Sita", score: 90 },
    { name: "Hari", score: 42 },
    { name: "Gita", score: 28 }
];
const messages = students.filter(n => (n.score>=40)).map(n => (`${n.name} - ${n.score} - 'Passed'`));
messages.forEach(n => (console.log(n)));

// Destructuring + Spread operator practice
const products = [
    { name: "Laptop", price: 80000, inStock: true },
    { name: "Phone", price: 45000, inStock: false },
    { name: "Tablet", price: 32000, inStock: true },
    { name: "Monitor", price: 25000, inStock: false },
];
const stocked = products.filter(n => (n.inStock)).map(n => {
    const {name,price,inStock} = n;
    return({...n,discountedPrice : (price*0.9)});
});
stocked.forEach(n => {
    console.log(`${n.name} - Rs${n.discountedPrice}`);
})
