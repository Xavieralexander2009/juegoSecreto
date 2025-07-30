
let numeroSecreto = 0;
//console.log (numeroSecreto); // aqui llamo la funcion para poder mostrarlo en la consola 
let intentos = 0
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) { //creamos una funcion para optimizar elemeto y texto
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = document.getElementById("valorUsuario").value; //saqué el ID del Input
   /*(typeof(numeroUsuario));
   (numeroUsuario)// para que se mostrar el valor en la consola 
   (numero==nombre)(numeroSecreto)
   (numeroUsuario != numeroSecreto)*/
   
  console.log(intentos)
  if(numeroUsuario==numeroSecreto){
    asignarTextoElemento("p",`ACERTASTE EN ${intentos} ${(intentos==1) ? 'VEZ' : 'VECES'} `)
    document.getElementById("reiniciar").removeAttribute("disabled")

  }else{
    if(numeroUsuario>numeroSecreto){
        asignarTextoElemento("p","EL NUMERO SECRETO ES MENOR")
    }else{
        asignarTextoElemento("p","EL NUMERO SECRETO ES MAYOR")
    }
    intentos++;
    limpiarCaja();
  }
   return 

}
function limpiarCaja(){
     document.querySelector('#valorUsuario').value = ' ';// puse una funcion para limpiar la caja
}

function generarNumeroSecreto (){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) +1;// generé un numero random para que sea el numero secreto

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","YA SE SORTEARON TODOS LOS NÚMEROS POSIBLES")

    }else{
        //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){// includes para incluir el numero generado a la lista
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento("h1", "BIENVENIDOS AL JUEGO!");
    asignarTextoElemento("p", `INTRODUCE UN NÚMERO DEL 1 AL ${numeroMaximo}`);//h1 y p para elemento y despues el texto 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log (numeroSecreto)
}

function reiniciarJuego(){
    //LIMPIAR LA CAJA 
    limpiarCaja();
    //indicar mensaje
    condicionesIniciales();
    //generar numero aleatorio
    
     //iniciar número de intentos
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');//desabilitar el botón de nuevo juego
    
}

condicionesIniciales();

/*
tipos de datos 
Int 0,100
string es una cadena de texto
booleano true false o verdadero o falso
chart simbolos de caracter 

let nota1 = 2
let nota2 = 3
let nota3 = 6
let nota4 = 1

function calcularPromedio(nota1,nota2,nota3,nota4){
    return promedio >= 6 ? "Aprobado " : "Reprobado"
}


/* .push para agregar al final de lista
.length para ver la longitud de la lista
.pop para eliminar al final de la lista
.sort para ordenar de menor a mayor 
.reverse para ordenar de mayor a menor
*/