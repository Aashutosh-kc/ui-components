
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
