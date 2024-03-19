const askName = () => prompt("¡Hola! Mi nombre es Kr9000. ¿Cuál es tu nombre?");

const formatName = (unformatedName) => {
    let capitalizedLetter = unformatedName.slice(0, 1).toUpperCase();
    let lowercasedLetter = unformatedName.slice(1).toLowerCase();
    let formatedName = capitalizedLetter + lowercasedLetter;
    return formatedName;
}

const askRange = () => {
    let number1 = prompt("Dime un número")
    let number2 = prompt("Dime otro número")
    let arrayNum;
    if (number1 < number2){
        arrayNum = [number1, number2]
    } else {
        arrayNum = [number2, number1]
    }
    return arrayNum;
}

const chooseRandom = (min, max) => Math.floor(Math.random() * (max - min ) + 1)

const giveInstructions = (val1, val2) => alert(`Piensa en un número del ${val1} al ${val2}. \nUna vez que lo hayas hecho, yo trataré de adivinarlo. \nTe daré un número y tú me dirás si es menor o mayor. \nPresiona enter una vez estés listo.`)

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min ) + 1);

const binarySearch = (min, max, getRandomNumber) => {

    let isCorrect;
    let isBigger;
    let keepPlaying = true
    let counter = 0;

    while (keepPlaying) {
        randomNumber = getRandomNumber(min, max)
        isCorrect = prompt(`Instrucciones: ----- Teclea 1 si el resultado es correcto \n----- Teclea 2 si el resultado es incorrecto \n::::: Tu número es:  ${randomNumber} ::::: \n min = ${min} max ${max} =`)
        parseInt(isCorrect)
        if (isCorrect !== 1) {            
            isBigger = prompt(`Teclea 1 si tu número es mayor que ${randomNumber}, de lo contrario teclea 2:`)
            if (isBigger === 1){
                min = randomNumber + 1
            } else {
                max = randomNumber - 1
                counter++
            }



        } else {
            alert(`¡Adiviné tu número! Tu número es: ${randomNumber}`)
            keepPlaying = false
        }

        

    }
    return [randomNumber, counter]
}

let userName;
let range;
let min;
let max;
let randomNumber;
let finishedLoop;
let finalNumber;
let finalCounter;

userName = formatName(askName());
console.log("Nombre de usuario: " + userName)

range = askRange();
console.log("Rango: " + range)

min = range[0];
console.log("Valor mínimo: " + min)

max = range[1];
console.log("Valor máximo: " + max)

giveInstructions(min, max);
console.log("Instructions executed")

finishedLoop = binarySearch(min, max, getRandomNumber);
console.log(`Loop ended. Result: ${finishedLoop}`)

finalNumber = finishedLoop[0]
console.log(`Final number: ${finalNumber}`)

finalCounter = finishedLoop[1]
console.log(`Final counter: ${finalCounter}`)
