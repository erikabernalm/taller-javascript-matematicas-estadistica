// Calculando el promedio
// function calcularPromedio(lista) {
// 	let sumaLista = 0; // contador

// 	for (let i = 0; i < lista.length; i++) {
// 		sumaLista = sumaLista + lista[i];
// 	}

// 	const promedio = sumaLista / lista.length;
// 	console.log(promedio);
// 	return promedio;
// }

// calcularPromedio([1,2,3,4,5]);


// Método reduce

function calcularPromedio(lista) {
	// Primer forma de hacerlo
	// let sumaLista = 0; // contador

	// for (let i = 0; i < lista.length; i++) {
	// 	sumaLista = sumaLista + lista[i];
	// }

	// Segunda forma
	// function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
	// 	return valorAcumulado + nuevoValor;
	// }

	// const sumaLista = lista.reduce(sumarTodosLosElementos);

	// Tercer forma. Uso de la sintaxis de las Arrow function () => {}

	// const sumarTodosLosElementos = (valorAcumulado, nuevoValor) => {
	// 	return valorAcumulado + nuevoValor;
	// };
	
	// Reducción de líneas de código
	const sumarTodosLosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor; // Implícitamente va a retornar algo

	const sumaLista = lista.reduce(sumarTodosLosElementos);

	const promedio = sumaLista / lista.length;
	// console.log(promedio);
	return promedio;
}

// Reto: función para saber si una lista es par o impar
// Uso del operador módulo (resto o residuo) %
// function esPar(lista) {
// 	if (lista.length % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// esPar([1,5,6,7]) // true
// esPar([1,5,6,7,9]) // false


// Otra forma de hacerlo

// function esPar(lista) {
// 	if (lista.length % 2) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

// esPar([1,2,5]) // false
// esPar([1,2,5,4]) // true

// Todo esto se puede simplicar mucho más

function esPar(lista) {
	return !(lista.length % 2);
}

esPar([1,2,5,4,6]) // false
esPar([1,2,5,4]) // true

function esImpar(lista) {
	return lista.length % 2;
}

esImpar([1,2,5,4]) // 0
esImpar([1,2,5]) // 1

// Calculando la mediana en una lista impar y par

function calcularMediana(listaDesordenada) {
	const lista = ordenarLista(listaDesordenada);
	const listaEsPar = esPar(lista);

	if (listaEsPar) {
		// Primer forma de hacerlo
		// const indexMitad1ListaPar = (lista.length / 2) - 1; // Le resta una posición
		// const indexMitad2ListaPar = lista.length / 2;
		// const listaMitades = [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]; // Estamos creando un array a partir de 2 elementos de otro array
		// calcularPromedio(listaMitades)

		// Segunda forma
		// const mitad1ListaPar = lista[(lista.length / 2) - 1];
		// const mitad2ListaPar = lista[lista.length / 2];
		// const listaMitades = [mitad1ListaPar, mitad2ListaPar];
		// calcularPromedio(listaMitades)

		// Tercer forma
		const indexMitad1ListaPar = (lista.length / 2) - 1;
		const indexMitad2ListaPar = lista.length / 2;
		const listaMitades = [];
		listaMitades.push(lista[indexMitad1ListaPar]);
		listaMitades.push(lista[indexMitad2ListaPar]);
		
		const medianaListaPar = calcularPromedio(listaMitades);
		return medianaListaPar;
	} else {
		const indexMitadListaImpar = Math.floor(lista.length / 2);
		const medianaListaImpar = lista[indexMitadListaImpar];
		console.log(indexMitadListaImpar);
		console.log(medianaListaImpar);
		return medianaListaImpar;
	}
}

// Método sort

function ordenarLista(listaDesordenada) {
	function ordenarListaSort(valorAcumulado, nuevoValor) {
		// if (valorAcumulado > nuevoValor) { // Ordena la lista de menor a mayor
		// 	return 1;
		// } else if (valorAcumulado == nuevoValor) {
		// 	return 0;
		// } else if (valorAcumulado < nuevoValor) {
		// 	return -1;
		// }

		return valorAcumulado - nuevoValor; // Ordena la lista de menor a mayor
		// return nuevoValor - valorAcumulado; // Ordena la lista de mayor a menor
	}

	const lista = listaDesordenada.sort(ordenarListaSort);
	// const lista = listaDesordenada.sort((a,b) => a-b); // Ordena la lista de menor a mayor
	// const lista = listaDesordenada.sort((a,b) => b-a); // Ordena la lista de mayor a menor

	return lista;
}

// Calculando la moda: objetos a partir de arrays

function calcularModa(lista) {
	const listaCount = {};

	for (let i = 0; i < lista.length; i++) {
		const elemento = lista[i];

		if (listaCount[elemento]) {
			listaCount[elemento] += 1;
		} else {
			listaCount[elemento] = 1;
		}
	}

	console.log(listaCount);
}