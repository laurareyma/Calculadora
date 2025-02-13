const pantalla = document.querySelector('.pantalla'); // Variable pantalla
const historial = document.querySelector('#historial'); // variable historial

// Variables ingresadas
let valorActual = '';
let valorAnterior = '';
let operador = '';
let historialTexto = '';

// Función para actualizar la pantalla
function actualizarPantalla(valor) {
    pantalla.textContent = valor; // aparece ese valor en la pantalla
}

// funcion para actfualizar historial
function actualizarHistorial() {
    historial.textContent = historialTexto; 
}

// función rectifica valores ingresados 
function manejarEntrada(valor) {
    if (!isNaN(valor) || valor === '.') { // Verifica si es un número o un punto decimal
        valorActual += valor;
        actualizarPantalla(valorActual);
        actualizarHistorial();
    } else if (['+', '-', 'x', '÷'].includes(valor)) { // Verifica si es un operador
        operador = valor;
        valorAnterior = valorActual;
        valorActual = '';
        historialTexto += `${valorAnterior} ${operador} `;
        actualizarHistorial();
    } else if (valor === '=') { // el botón igual ejecuta la función realizarCalculo
        realizarCalculo();
    } else if (valor === 'AC') { // el botón borrar ejecuta la función resetearCalculadora
        resetearCalculadora();
    } else if (valor === '+/-') { // este operador permite cambiar el signo del número ejecutando la función cambiarSigno
        cambiarSigno();
    }
}

// función del operador cambiar signo
function cambiarSigno() {
    if (valorActual !== '') { // Si hay un número ingresado
        valorActual = (parseFloat(valorActual) * -1).toString(); // Convierte el valor a float y lo multiplica por -1
        actualizarPantalla(valorActual); 
        actualizarHistorial();
    }
}

// función para realizar los cálculos según el operador ingresado
function realizarCalculo() {
    let resultado; //crea variable resultado

    // convertir datos a float
    const numAnterior = parseFloat(valorAnterior);
    const numActual = parseFloat(valorActual);

    // hace una operación dependiendo del cálculo guardando el resultado en una variable
    switch (operador) {
        case '+':
            resultado = numAnterior + numActual;
            break;
        case '-':
            resultado = numAnterior - numActual;
            break;
        case 'x':
            resultado = numAnterior * numActual;
            break;
        case '÷':
            resultado = numAnterior / numActual;
            break;
        default:
            return;
    }

    // se muestra la variable que contiene el resultado y deja los valores anteriores vacíos para nuevas operaciones
    actualizarPantalla(resultado);
    //agrega los valores ingresados al historial
    historialTexto += `${valorActual} = ${resultado}`; // Agrega al historial
    actualizarHistorial();
    valorActual = resultado.toString();
    operador = '';
    valorAnterior = '';
}

// función para resetear la calculadora
function resetearCalculadora() {
    // deja todos los valores y operador vacíos y muestra en pantalla 0
    valorActual = '';
    valorAnterior = '';
    operador = '';
    historialTexto = ''; // elimina historial anterior 
    actualizarPantalla('0');
    actualizarHistorial();
}

// permite trabajar con los valores de cada botón
document.querySelectorAll('.boton').forEach(boton => {
    boton.addEventListener('click', () => {
        manejarEntrada(boton.textContent);
    });
});

// función para cambiar entre modo claro y oscuro
document.addEventListener('DOMContentLoaded', function() {
    const cambiarModoButton = document.getElementById('cambiarModo');
    const body = document.body;

    // condicional para que inicie en modo claro
    if (!body.classList.contains('dark-mode')) {
        body.classList.add('light-mode');
    }

    cambiarModoButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) { // si está en modo oscuro
            body.classList.remove('dark-mode'); // elimina modo oscuro
            body.classList.add('light-mode'); // agrega modo claro
            cambiarModoButton.textContent = '🌙'; // cambia el icono del botón
        } else { // Si está en modo claro
            body.classList.remove('light-mode'); // elimina modo claro
            body.classList.add('dark-mode'); // agrega modo oscuro
            cambiarModoButton.textContent = '🌞'; // cambia el icono del botón
        }
    });
});
