
let userName;
let range;
let userNumber;
let result;
let min;
let max;
let isCorrect;
let counter;
let isBigger;
let randomNumber;

userName = formatName(askName);


//let min = range[0];
//let max = range[1];


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

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min ) + 1)  

const giveInstruction = (val1, val2) => alert(`Piensa en un número del${val1} al ${val2}. Una vez que lo hayas hecho, yo trataré de adivinarlo. Te daré un número y tú me dirás si es menor o mayor.`)

const binarySearch = (min, max, getRandomNumber() ) => {

    let isCorrect;
    let isBigger;
    let keepPlaying = true
    let counter = 0;

    while (keepPlaying) {
        randomNumber = getRandomNumber(min, max)
        isCorrect = prompt(`Teclea 1 si el resultado es correcto, de lo contrario presiona 2:\n ::: Tu número es ${randomNumber}`)
        if (isCorrect !== 1) {            
            isBigger = prompt(`Teclea 1 si tu número es mayor que ${randomNumber}, de lo contrario teclea 2:`)
            if (isBigger === 1){
                min = randomNumber + 1
                counter++
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

