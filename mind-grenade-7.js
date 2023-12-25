const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is: ${num1+num2}`)
}
addValues();

const names= require('./names-4');
const sayHi= require('./utils-5');
const data =require('./alternative-flavour-6')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)