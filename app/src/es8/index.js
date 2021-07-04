const data = {
    frontend: "Adrian",
    backend: "Sara",
    design: "Jesus",
}

const entries = Object.entries(data);

console.log(entries.length);

const values = Object.values(data);
console.log(values);

const string = "hello";
console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(7, 'Hi'));