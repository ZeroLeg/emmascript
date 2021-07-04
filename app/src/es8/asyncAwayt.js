const helloWorld = () =>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)

            : reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    //Con await hasta que no se haya ejecutado la función anterior, no se ejecuta
    //el consoleLog
    console.log(hello);
}

helloAsync();

const anotherfuncion = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);  
    }
}

anotherfuncion();