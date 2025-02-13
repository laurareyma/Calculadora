// Seleccionar el elemento donde se mostrará el resultado
const toggleButton = document.getElementById('toggleMode');
const body = document.body;
const resultado = document.getElementById('resultado');

// Variable para guardar la operación actual
let operacionActual = '';

// Función para agregar números y operadores al resultado
function agregarValor(valor) {
    if (operacionActual.length < 10) { // Limita la longitud de la operación a 10 caracteres
        operacionActual += valor; // Añadir el valor (número u operador) a la operación actual
    resultado.textContent = operacionActual; // Mostrar la operación en el área de resultado
}
}

// Función para realizar el cálculo
function calcular() {
    try {
        // Evalúa la expresión matemática en la variable 'operacionActual'
        const resultadoFinal = eval(operacionActual);

        // Mostrar el resultado en el área de resultado
        resultado.textContent = resultadoFinal;

        // Guardar el resultado en la variable 'operacionActual' para cálculos continuos
        operacionActual = resultadoFinal.toString();
  
    } catch (error) {
        // Si hay un error en la evaluación (por ejemplo, una operación incorrecta), muestra 'Error'
        resultado.textContent = 'Error';
        operacionActual = ''; // Restablece la operación actual
    }
}

// Función para restablecer la calculadora
function limpiar() {
    operacionActual = ''; // Restablece la operación actual
    resultado.textContent = ''; // Limpia el área de resultado
    resultado.style.fontSize = '3em';
}

// Función para cambiar el signo de la operación actual
function cambiarSigno() {
    if (operacionActual) {
        if (operacionActual.startsWith('-')) {
            operacionActual = operacionActual.slice(1);
        } else {
            operacionActual = '-' + operacionActual;
        }
        resultado.textContent = operacionActual;
    }
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});


// Asociar los botones con las funciones correspondientes
document.getElementById('ac').addEventListener('click', limpiar);
document.getElementById('siete').addEventListener('click', () => agregarValor('7'));
document.getElementById('ocho').addEventListener('click', () => agregarValor('8'));
document.getElementById('nueve').addEventListener('click', () => agregarValor('9'));
document.getElementById('cuatro').addEventListener('click', () => agregarValor('4'));
document.getElementById('cinco').addEventListener('click', () => agregarValor('5'));
document.getElementById('seis').addEventListener('click', () => agregarValor('6'));
document.getElementById('uno').addEventListener('click', () => agregarValor('1'));
document.getElementById('dos').addEventListener('click', () => agregarValor('2'));
document.getElementById('tres').addEventListener('click', () => agregarValor('3'));
document.getElementById('cero').addEventListener('click', () => agregarValor('0'));
document.getElementById('coma').addEventListener('click', () => agregarValor('.'));

// Operadores
document.getElementById('division').addEventListener('click', () => agregarValor('/'));
document.getElementById('multiplicacion').addEventListener('click', () => agregarValor('*'));
document.getElementById('resta').addEventListener('click', () => agregarValor('-'));
document.getElementById('suma').addEventListener('click', () => agregarValor('+'));

// Resultado
document.getElementById('igual').addEventListener('click', calcular);

// Cambiar Signo
document.getElementById('sumre').addEventListener('click', cambiarSigno);