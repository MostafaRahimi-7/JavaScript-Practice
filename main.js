// /*
// console.log("Micheal");
// console.log(23);
// console.log(40 + 8 + 23 - 10);
// let firstName = "Omer";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Name the vairables perfectly:

// let firstJob = "Teacher";
// let curentJob = "Programmer";

// // Don't do like this:

// let job1 = "Teacher";
// let job2 = "Programmer";
// console.log(firstJob);
// console.log(curentJob);

// // Data Types:

// let age = 23;
// let lastName = "Rahimi";
// let isActive = true; // or flase
// let children; // don't assign values emty value
// let id = null; // it different with undefined
// const mySymbol = symbol(); // not realy useful.
// const bigNumber = BigInt(999999999999999); // for big integer number
// */

// let appleIsFruit = true;
// console.log(appleIsFruit);

// console.log(typeof true);
// console.log(typeof "mostafa");
// console.log(typeof 2352);
// console.log(typeof "rahimi");

// appleIsFruit = "true";
// console.log(typeof appleIsFruit);

// // let _undefined;
// // console.log(_undefined);
// // console.log(typeof _undefined);

// let _undefined = 23;
// console.log(_undefined);
// console.log(typeof _undefined);

// console.log(typeof null);

// // Declaring the varibales:

// let price = 120;
// price = 250;

// const birthYear = 2001;
// // birthYear = 2000; this is an error
// console.log(birthYear);
// // const escape; this is also an error we have to assign a value to const varible after decalaring.

// // Arithmetic Operators:
// const currentyear = 2024;
// const age1 = currentyear - 2001;
// const age2 = currentyear - 2000;
// console.log(age1, age2);

// console.log(age1 * 16);
// console.log(age1 / 10);
// console.log(4 ** 5);

// const firstName = "Mostafa";
// const lastName = "Rahimi";
// console.log(firstName + " " + lastName);

// // Assignmen operators

// let fullName = firstName + lastName;
// console.log(fullName);

// let counter = 0;
// counter += 10;
// console.log(counter);

// counter *= 5;
// console.log(counter);

// counter /= 2;
// console.log(counter);

// counter++;
// counter--;
// counter--;
// counter--;
// console.log(counter);

// // Comprasino operators:

// console.log(age1 > age2);
// console.log(age1 < age2);
// console.log(age2 >= 18);
// console.log(age2 <= 18);

// const legalAge = age2 >= 18;
// console.log(legalAge);

// console.log(currentyear - 1996 > currentyear - 2005);

// const currentyear = 2024;
// const age1 = currentyear - 1996;
// const age2 = currentyear - 2005;

// console.log(currentyear - 1996 > currentyear - 2005);
// console.log(100 - 30 - 10);

// let a, b;
// a = b = 100 - 30 - 10;
// console.log(a, b);

// console.log(age1, age2);
// const average = (age1 + age2) / 2;
// console.log(average);
// console.log("There is some changes in this repository");

// String & Template Literals

// const brandName = "BMW";
// const modelName = "Series 6";
// const year = 2024;

// const myCar = 'My car is ' + ' ' + brandName + ' ' + modelName + 'I bought this ' + ' ' + year;

// console.log(myCar);

// const myCar2 = `My car is ${brandName} ${modelName}, I bought it ${year}`;
// console.log(myCar2);

// console.log(`Backtext`);
// // For multi line strings: we have tow way boring and awesome 👌
// console.log('hello \n\ How are you? \n\ I am fine');//this boring
// // this awesome:
// console.log(`Hello
//     How are you?
//         I am fine`);

// Conditional statements:

// const personAge = 8;

// if(personAge >= 18){
//     console.log('Mostafa can buy some chese⭐');
// }else{
//     const yearsLeft = 18 - personAge;
//     console.log(`Mostafa is too young for chese, he can buy it in ${yearsLeft} year later`);
// }

// const personAge = 1;
// if(personAge >= 18){
//     console.log(`Cangratulation the bills has paid succefully!`);
// }else{
//     const remainyear = 18 - personAge;
//     console.log(`Sorry! your too young to pay the bill, you pay ${remainyear} years later`);
// }

// const personAge = 10;
// if (personAge >= 18) {
//   console.log(`Your allow to apply for driving license`);
// } else {
//   const remainYear = 18 - personAge;
//   console.log(`Sorry! you can't apply for driving license, please wait ${remainYear} years`);
// }

// Type conversion and coersion: it mean converting the data type to each other
// 1-Type conversion it manually converting one data type to another.
// 2-Tyoe coersion is converting the data types logically in back sence by javascript for programmers.

// const inputAge = "26";
// console.log(inputAge + 3);
// console.log(Number(inputAge), inputAge);
// console.log(Number(inputAge) + 3);

// console.log(Number("Hello")); //NaN => stand for no a number, means an invalid number.
// console.log(typeof NaN);

// console.log(String(100));
// console.log(String(200), 200);

// // Type coersion

// console.log("I was born in " + 2000);
// console.log("I was born in " + "2000");
// // the below statements are the same:
// console.log('1990' - '20' - 10);
// console.log('1990' - '20' - "10");

// // Multiple is like the same of substraction:
// console.log("1990" * "5");

// let number = "10" + 10; //1010
// number = number - 10; // 1010-10 = 1000
// console.log(number);

// Fasly and truthy values:
// Falsey values: 0, '', undefined, null, NaN
// Truthy value: opisite of the falsy values.

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean(NaN));
// console.log(Boolean("mostafa"));

// const candy = 0;
// if (candy) {
//   //In here the javascript convert the numer candy to boolean.
//   console.log("Do not eat too much candy!");
// } else {
//   console.log("You have no candy");
// }

// let age = 0;
// console.log(typeof age);
// if (age) {
//   console.log(`Age = ${age}`);
// } else {
//   console.log(`No age`);
// }

// Equality Operators:

// const age = 18;
// // const age = "18";
// if (age === 18) console.log("Your are in legal age (===)"); // use this way to compare values most
// if (age == 18) console.log("Your are in legal age (==)"); // use this way to compare values less

// // prompt function get string values and we have to change it to number
// const inputAge = Number(prompt("What is your age: "));
// console.log(inputAge);
// if(inputAge === 26)console.log('Your are the same age with me');
// else if(inputAge === 12) console.log("your are the age of my son");
// else console.log("NO age");

// if(inputAge!==26) console.log("no no no");

// Logical operators: AND(&&), OR(||), NOT(!)
/*
const hasMotorCycle = true;
const hasCar = true;

console.log(hasMotorCycle && hasCar);
console.log(hasMotorCycle || hasCar);
console.log(!hasMotorCycle);

const isRainy = false;
const shouldDrive = hasCar && isRainy;

if (shouldDrive) {
  console.log("Mostafa should drive because its rainy!");
} else if (hasMotorCycle && !isRainy) {
  console.log("Mostafa can ride motocycle too");
}

const isOld = false;
const mustDrive = true;
if (isOld) {
  console.log("He or She must not drive the car");
} else if (mustDrive && !isOld) {
  console.log("He or She can drive the car because they are not too old");
}

const notLegal = true;
const payBill = true;

if (notLegal) {
  console.log("You can not pay the bill");
} else if (payBill && !notLegal) {
  console.log("You are allowed to pay the bills");
}
*/

// Switch statements:

const operator = "+";
const numberOne = 10;
const numberTwo = 5;

switch (operator) {
  case "+": {
    console.log(`Sum of two number is = ${numberOne + numberTwo}`);
    break;
  }
  case "-": {
    console.log(`Substractio of two number is = ${numberOne - numberTwo}`);
    break;
  }
  case "*": {
    console.log(`Multiplection of two number is = ${numberOne * numberTwo}`);
    break;
  }
  case "/": {
    console.log(`Division of two number is = ${numberOne / numberTwo}`);
    break;
  }
  default: {
    console.log(`Invalid operator 🥹`);
    break;
  }
}

const days = "friday";

switch (days) {
  case "saturday": {
    console.log(`${days} is the first day of Week`);
    break;
  }
  case "sunday": {
    console.log(`${days} is the second day of week`);
    break;
  }
  case "monday": {
    console.log(`${days} is the third day of week`);
    break;
  }
  case "teusday": {
    console.log(`${days} is the fourth day of week`);
    break;
  }
  case "wednsday": {
    console.log(`${days} is the fifth day of week`);
    break;
  }
  case "thursday": {
    console.log(`${days} is the sixth day of week`);
    break;
  }
  case "friday": {
    console.log(`${days} is the last day of week on other word weekend`);
    break;
  }
  default: {
    console.log(`Invalid value 🥹`);
    break;
  }
}
