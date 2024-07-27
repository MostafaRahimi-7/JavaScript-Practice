"use strict";
// Strict Mode: 1-Forbids   2-Error on console
// Evertime put the strict mode on.
// Strict mode help us to avoid bugs in the programm.
// Strict mode don't allow us to use the keyword variable names to decalare variable by them. for example public, private or etc...

// let isAvailable = true;
// let inMeeting = true;

// if (inMeeting) isAvailable = false; // in this sentece instead of isAvailable write isAvailabl to see how it work
// if (isAvailable) console.log(`Person is available`);
// else console.log(`Person is in meeting`);

/*
const public = 'Canada';
const private = 'room 15';
const switch = 'open';
*/

/////////////////////// Functions:
/*
function welcomeText() {
  console.log(`Hello and welcome!`);
}

welcomeText(); //invoking, running, calling => all these three is the same.
welcomeText();
welcomeText('hello'); // when a function dose'nt hava parameter if we pass argument it will not effect on the function and will not return any value.

function calculator(number1, number2) {
  console.log(number1, number2);
  const addition = number1 + number2;
  const resultText = `${number1} + ${number2} = ${addition}`; //10 + 20 = 30

  return resultText;
}

const result1 = calculator(12, 24);
console.log(result1); //In here we save the result into a variable
// console.log(calculator(12, 24)); // In here we just log the return value to output

const result2 = calculator(100,200);
console.log(result2);

// *** function that dose'nt have parameter or parameters it will not return any values. maximum it can hava a console.log to show a messege.

*/

// Function without any parameter:
function calculator(){
    console.log(`Calculator!`);
}

// Function to sum two number:
function sum(numberOne, numberTwo){
    console.log(numberOne, numberTwo);
    const addition = numberOne + numberTwo;
    const resultSum = `${numberOne} + ${numberTwo} = ${addition}`;

    return resultSum;
}


// Function to substract two number:
function sub(numberOne, numberTwo){
    console.log(numberOne, numberTwo);
    const substract = numberOne - numberTwo;
    const resultSub = `${numberOne} - ${numberTwo} = ${substract}`;

    return resultSub;
}


// Function to multiple two number:
function multiplication(numberOne, numberTwo){
    console.log(numberOne, numberTwo);
    const multiple = numberOne * numberTwo;
    const resultMultiple = `${numberOne} * ${numberTwo} = ${multiple}`;

    return resultMultiple;
}


// Function to divide two number:
function division(numberOne, numberTwo){
    console.log(numberOne, numberTwo);
    const divide = numberOne / numberTwo;
    const resultDivid = `${numberOne} / ${numberTwo} = ${divide}`;

    return resultDivid;
}


calculator();

let sumResult = sum(10,20);
console.log(sumResult);


let subResult = sub(40,15);
console.log(subResult);


let multipleResult = multiplication(15,15);
console.log(multipleResult);


let divideResult = division(100, 6);
console.log(divideResult);




