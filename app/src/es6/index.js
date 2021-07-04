function newFunction(name, age, country){
    var name = name || 'adrian';
    var age = age || 28;
    var country = country || 'ES';
    console.log(name, age, country);
}


// es6
function newFunction2( name = "adrian", age = 28, country = 'ES') {

    console.log(name, age, country);
}

let hello = "hello";
let wolrd = "world";

// concatenación
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);