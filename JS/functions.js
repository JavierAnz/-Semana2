function calcularPotencia() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = Math.pow(num1, num2);
  document.getElementById(
    "resultado-potencia"
  ).innerHTML = `${num1} elevado a la potencia ${num2} es igual a ${resultado}`;
}

function Convert() {
  let centigrados = document.getElementById("centigrados").value;
  let farenheit = (centigrados * 9) / 5 + 32;
  document.getElementById(
    "resultado_centigrados"
  ).innerHTML = `${centigrados}c equivale a ${farenheit} F`;
}

const listaNombres = [];

function agregarNombre() {
  let nombre = document.getElementById("nombre").value;
  listaNombres.push(nombre);
  actualizarListaNombres();
}

function actualizarListaNombres() {
  let lista = document.getElementById("listaNombres");
  lista.innerHTML = "";
  for (let nombre of listaNombres) {
    let elementoLista = document.createElement("li");
    elementoLista.innerText = nombre;
    lista.appendChild(elementoLista);
  }
}

function filtrarNombres() {
  let numLetras = document.getElementById("numLetras").value;
  let listaFiltrada = listaNombres.filter(
    (nombre) => nombre.length === numLetras
  );
  actualizarListaFiltrada(listaFiltrada);
}

function actualizarListaFiltrada(lista) {
  let listaFiltradaElement = document.getElementById("listaFiltrada");
  listaFiltradaElement.innerHTML = "";
  for (let nombre of lista) {
    let elementoLista = document.createElement("li");
    elementoLista.innerText = nombre;
    listaFiltradaElement.appendChild(elementoLista);
  }
}

function calcularEdad() {
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let diferenciaAnios = 2024 - fechaNacimiento.getFullYear();
  let diferenciaMeses = 2 - fechaNacimiento.getMonth();
  let diferenciaDias = 7 - fechaNacimiento.getDate();
  let edad = diferenciaAnios;
  if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
    edad--;
  }
  if (diferenciaDias < 0) {
    diferenciaDias += 30;
    diferenciaMeses--;
  }
  if (diferenciaMeses < 0) {
    diferenciaMeses += 12;
    diferenciaAnios--;
  }
  document.getElementById(
    "resultado_edad"
  ).innerHTML = `Tu edad es de ${edad} años, ${diferenciaMeses} meses y ${diferenciaDias} días`;
}

function contarPalabras() {
  const hilera = document.getElementById("hilera").value;
  const palabras = hilera.split(" ");
  const numeroPalabras = palabras.length;
  document.getElementById(
    "resultado_palabras"
  ).innerHTML = `La hilera tiene ${numeroPalabras} palabras`;
}

const listaNumeros = [];

function agregarNumero() {
  const numero = parseInt(document.getElementById("numero").value);
  listaNumeros.push(numero);
  actualizarListaNumeros();
  calcularPromedio();
}

function actualizarListaNumeros() {
  const lista = document.getElementById("listaNumeros");
  lista.innerHTML = "";
  for (const numero of listaNumeros) {
    const elementoLista = document.createElement("li");
    elementoLista.innerText = numero;
    lista.appendChild(elementoLista);
  }
}

function calcularPromedio() {
  let suma = 0;
  for (const numero of listaNumeros) {
    suma = suma + numero;
  }
  console.log(suma);
  const promedio = suma / listaNumeros.length;
  document.getElementById(
    "resultado_promedio"
  ).innerHTML = `El promedio es ${promedio}`;
}
