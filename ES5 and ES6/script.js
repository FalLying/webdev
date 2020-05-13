// let + const
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
}

const obj = {
    player: "Jonas",
    experience: 100,
    wizardLevel: false
}

// template strings
const name = "Sally";
const age = 34;
const pet = "house";
// const greeting = 
//     "Hello "
//     + name 
//     + "you seem to be doing "
//     + greeting
//     + "!";
const greetingBest = `Hello ${name} you seem to be ${age}. What a lovely ${pet} you have`;

// default arguments
function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age}. What a lovely ${pet} you have`;
}

// Symbol

var sym1 = Symbol();
var sym 2 = Symbol('foo');
var sym3 = Symbol('foo');

// Arrow functions

function add(a, b){
    return a+b;
}

const add = (a, b)=>a+b;
