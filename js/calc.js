 import {sum , substract, multiply, divide} from "../js/math.js";
 export let exp = {
    a: '0',
    b:'',
    operation:'',
}
export let result = null;


export const calculate = (exp) => {
 
     switch (exp.operation) {
        case '+': 
        result = sum(Number(exp.a), Number(exp.b));
        break;

        case '-': 
        result =substract(Number(exp.a), Number(exp.b));
        break;

        case '*': 
        result = multiply(Number(exp.a), Number(exp.b));
        break;

        case '/': 
        result = divide(Number(exp.a), Number(exp.b));
        break;
        
        default:
            break;
     }
     return result
};



