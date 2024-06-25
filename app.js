/*
1) Hacer una calculadora con la interfaz, debe lucir como una
  calculadora fisica, y debe ser capaz de realizar cualquier
  calculo (suma, resta, division, multiplicacion, potencia)

  opcional: Hacerle el modo claro y oscuro, y el responsive
*/
const text_area = document.querySelector('#datos');
const valores = document.querySelector('.valores');
const equal = document.querySelector('.igual');
let igual = false;
let mas = false;
let menos = false;
let por = false;
let entre = false;

equalual.addEventListener('click', function(){
  igual = true;
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




valores.addEventListener('click', function(){
  text_area.textContent =  valores.textContent;
});



function bucle(){
  console.log('Entrando a la funcion bucle');
  let operador = undefined;
  let numero1 = undefined;
  let numero2 = undefined;
  while(igual == false){
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