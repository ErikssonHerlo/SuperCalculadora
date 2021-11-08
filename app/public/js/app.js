const btnSumar = document.querySelector('#buttonSumar');
const btnRestar = document.querySelector('#buttonRestar');
const btnMultiplicar = document.querySelector('#buttonMultiplicar');
const btnDividir = document.querySelector('#buttonDividir');
const btnActualizar = document.querySelector('#buttonActualizar');

const inputOperando1 = document.querySelector('#operando1');
const inputOperando2 = document.querySelector('#operando2');

const resultado = document.querySelector('#resultado');
const historial = document.querySelector('#historico');

const api = `http://localhost/api/operation`;

async function sendSuma(e){
    const value1 = inputOperando1.value;
    const value2 = inputOperando2.value;
    if(value1 && value2){
        
        //try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/suma`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
        //} catch (error) {
        
        //}
}S
}

btnSumar.addEventListener('click',sendSuma);

