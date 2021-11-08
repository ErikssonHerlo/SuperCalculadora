const btnSumar = document.querySelector('#buttonSumar');
const btnRestar = document.querySelector('#buttonRestar');
const btnMultiplicar = document.querySelector('#buttonMultiplicar');
const btnDividir = document.querySelector('#buttonDividir');
const btnActualizar = document.querySelector('#buttonActualizar');

const inputOperando1 = document.querySelector('#operando1');
const inputOperando2 = document.querySelector('#operando2');

const resultado = document.querySelector('#resultado');
//const listadoHistorial = document.querySelector('#historico');
const historial = [];
const api = `http://localhost/api/operation`;

async function sendSuma(e){
    const value1 = inputOperando1.value;
    const value2 = inputOperando2.value;

    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} + ${value2} = ${val.resultado}`);
            document.getElementById("resultado").innerHTML = `<h5>${val.resultado}</h5>`;
            document.getElementById("historial").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("historial").innerHTML += `<h5>${historial[i]}<br></h5>`;
                console.log(historial[i]);
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}
async function sendResta(e){
    const value1 = inputOperando1.value;
    const value2 = inputOperando2.value;
    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/resta`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} - ${value2} = ${val.resultado}`);
            document.getElementById("resultado").innerHTML = `<h5>${val.resultado}</h5>`;
            document.getElementById("historial").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("historial").innerHTML += `<h5>${historial[i]}<br></h5>`;
                console.log(historial[i]);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
async function sendMultiplicacion(e){
    const value1 = inputOperando1.value;
    const value2 = inputOperando2.value;
    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/multiplicacion`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} * ${value2} = ${val.resultado}`);
            document.getElementById("resultado").innerHTML = `<h5>${val.resultado}</h5>`;
            document.getElementById("historial").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("historial").innerHTML += `<h5>${historial[i]}<br></h5>`;
                console.log(historial[i]);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
async function sendDivision(e){
    const value1 = inputOperando1.value;
    const value2 = inputOperando2.value;
    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/division`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} / ${value2} = ${val.resultado}`);
            document.getElementById("resultado").innerHTML = `<h5>${val.resultado}</h5>`;
            document.getElementById("historial").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("historial").innerHTML += `<h5>${historial[i]}<br></h5>`;
                console.log(historial[i]);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
btnSumar.addEventListener('click',sendSuma);
btnRestar.addEventListener('click',sendResta);
btnDividir.addEventListener('click',sendDivision);
btnMultiplicar.addEventListener('click',sendMultiplicacion);
