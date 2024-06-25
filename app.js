/*
1) Hacer una calculadora con la interfaz, debe lucir como una
  calculadora fisica, y debe ser capaz de realizar cualquier
  calculo (suma, resta, division, multiplicacion, potencia)

  opcional: Hacerle el modo claro y oscuro, y el responsive
*/
const text_area = document.querySelector('#datos');
const valores = document.querySelector('.valores');
const equal = document.querySelector('.igual');
const divisor = document.querySelector('.entre');
const multi = document.querySelector('.por');
const subs = document.querySelector('.menos');
const anadir = document.querySelector('.mas');
let igual = false;
let mas = false;
let menos = false;
let por = false;
let entre = false;

equal.addEventListener('click', function(){
  igual = true;
});

divisor.addEventListener('click', function(){
  entre = true;
});

multi.addEventListener('click', function(){
  por = true;
});

subs.addEventListener('click', function(){
  menos = true;
});

anadir.addEventListener('click', function(){
  mas = true;
});

valores.addEventListener('click', function(){
  text_area.textContent =  valores.textContent;
});


function calculadora(numero1,operador,numero2){
  if (operador == '+'){
    console.log(parseInt(numero1) + parseInt(numero2));
    return (parseInt(numero1) + parseInt(numero2));
  } else if(operador == '-'){
    console.log(parseInt(numero1) - parseInt(numero2));
    return (parseInt(numero1) - parseInt(numero2));
  }else if ( operador == '/'  ){
    console.log(parseInt(numero1) / parseInt(numero2) );
    return (parseInt(numero1) / parseInt(numero2) );
  } else if (operador == '*'){
    console.log(parseInt(numero1) * parseInt(numero2));
    return (parseInt(numero1) * parseInt(numero2));
  } else {
    return ('Error, Datos invalidos')
  } 
}


function bucle(){
  console.log('Entrando a la funcion bucle');
  let operador = undefined;
  let numero1 = undefined;
  let numero2 = undefined;
  if(igual == false){
    console.log('Entrando al bucle');
    if(mas == true){
      numero1 = text_area.textContent;
      text_area.textContent = '';
      operador = '+';
    }else if (menos == true){
      numero1 = text_area.textContent;
      text_area.textContent = '';
      operador = '-';
    } else if (entre == true){
      numero1 = text_area.textContent;
      text_area.textContent = '';
      operador = '/';
    } else if (por == true){
      numero1 = text_area.textContent;
      text_area.textContent = '';
      operador = '*';
    }
  }
  numero2 = text_area.textContent;
  text_area.textContent = '';
  text_area.textContent = calculadora(numero1,operador,numero2);
}

document.addEventListener('DOMContentLoaded',function(){
  console.log('Cargado');
  bucle();
});