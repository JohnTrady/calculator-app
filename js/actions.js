import {exp, calculate}  from '../js/calc.js';


const screenOutput = document.querySelector('[data-screen] span');


export const actions = e => {
    let targetEl = e.target;
    if(targetEl.closest('[data-numpad-digit]')) {
        if(exp.b === '' && exp.operation === '') {
            exp.a += `${targetEl.textContent}`;
            screenOutput.textContent = Number(exp.a);
        } else {
       
            exp.b += `${targetEl.textContent}`;
            screenOutput.textContent =  Number(exp.b);
        }
    } else if (targetEl.closest('[data-numpad-button]').getAttribute('data-numpad-button') === 'reset') {
         reset();
    } else if (targetEl.closest('[data-numpad-operation]')) {
        if(exp.b) {
           initResult();
         }
         exp.operation = targetEl.getAttribute('data-numpad-operation');
         
        
    } else if (targetEl.closest('[data-numpad-button]').getAttribute('data-numpad-button') === 'result') {
        if(exp.operation) {
            if(exp.b === '') {
                exp.b = exp.a;
             } 
            
             initResult();
        }
     
      
   
    }else if(targetEl.closest('[data-numpad-button]').getAttribute('data-numpad-button') === 'change'){
        changeSign();
    }else if(targetEl.closest('[data-numpad-button]').getAttribute('data-numpad-button') === 'percent'){
        getPercent();
    };

     function initResult () {
        screenOutput.textContent = calculate(exp);
        exp.a = screenOutput.textContent;
        exp.b ='';
     };

     function changeSign () {
        if(exp.b === '' ) {
            exp.a =  -1 * Number(exp.a); 
            screenOutput.textContent = Number(exp.a);
        } else {
            exp.b =  -1 * Number(exp.b); 
            screenOutput.textContent =  Number(exp.b);
        }
     };
     function getPercent () {
        if(exp.b === '' ) {
            exp.a =   Number(exp.a) / 100; 
            screenOutput.textContent = Number(exp.a);
        } else {
            exp.b =   Number(exp.b) / 100; 
            screenOutput.textContent =  Number(exp.b);
        }
     };

     function reset() {
        screenOutput.textContent = '0';
        exp.a = '0';
        exp.b ='';
        exp.operation = '';
     }
     if(screenOutput) {
        if(screenOutput.textContent.length > 7 && screenOutput.textContent.length < 12) {
            screenOutput.style.fontSize = 'calc(24px + 16 * ((100vw - 320px)/ 448))';
        } else if (screenOutput.textContent.length >= 12){
            screenOutput.style.fontSize = 'calc(22px + 10 * ((100vw - 320px)/ 448))';
        }else {
            screenOutput.style.fontSize = '';
        }
     }

     if(screenOutput.textContent.includes('.')) {
        document.querySelector('[data-numpad-digit="."]').disabled = true;
     } else {
        document.querySelector('[data-numpad-digit="."]').disabled = false;
     }

     if(screenOutput.textContent === 'Infinity' || screenOutput.textContent === 'NaN') {
        screenOutput.textContent = 'Error';
        reset();
     } 

   console.log(exp)
}

