let nombre = "adrian";
let age = 28;

// El obj2 y el 1 son equivalentes, el obj2 sería la forma de es6 
obj = { nombre: nombre, age: age };
obj2 = { nombre, age};

const names = [
   obj,
   obj2 
];


// Arrow functions es6, funciones equivalentes
let listOfNames = names.map(function (item){
    console.log( item.nombre );
})
let listOfNames2 = names.map(item=> console.log(item.nombre));

const square = num => num * num;

//promesas
//todas las promesas tienen resolve y reject, que es equivalente a acierto y error más o menos
//las promesas pueden tener más de un then, por si queremos hacer cosas diferentes si el valor  
//obtenido es diferente
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if (true){
            resolve("Hey!");
        }else{
            reject("Ups!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=>console.log("hola"))
    .catch(error => console.log(error));
