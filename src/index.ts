import { concatenation } from "./concatenation";
import {
    add,
    multiply,
    subtraction,
    division,
    remainder,
    pow
} from './sum'

const button = document.querySelector('button');
const input = document.querySelector('input');

if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello');
    })
}

const n1 = 10;
const n2 = 3;

console.log(`n1=${n1},  n2=${n2},  ${n1} + ${n2}=`,add(n1, n2));
console.log(`n1=${n1},  n2=${n2},  ${n1} * ${n2}=`,multiply(n1, n2));
console.log(`n1=${n1},  n2=${n2},  ${n1} - ${n2}=`,subtraction(n1, n2));
console.log(`n1=${n1},  n2=${n2},  ${n1} / ${n2}=`,division(n1, n2));
console.log(`n1=${n1},  n2=${n2},  ${n1} % ${n2}=`,remainder(n1, n2));
console.log(`n1=${n1},  n2=${n2},  ${n1} pow ${n2}=`,pow(n1, n2));
console.log('Second number is 0')
console.log(`n1=${n1},  n2=0,  ${n1} / 0=`,division(n1, 0));
console.log(`n1=${n1},  n2=0,  ${n1} % 0=`, remainder(n1, 0));
console.log(`n1=${n1},  n2=0,  ${n1} pow 0=`,pow(n1, 0));
