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

// function calcularModa(lista) {
// 	const listaCount = {};

// 	for (let i = 0; i < lista.length; i++) {
// 		const elemento = lista[i];

// 		if (listaCount[elemento]) {
// 			listaCount[elemento] += 1;
// 		} else {
// 			listaCount[elemento] = 1;
// 		}
// 	}

// 	console.log(listaCount);
// }

// Calculando la moda: arrays a partir de objetos

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

	// console.log(listaCount);

	const listaArray = Object.entries(listaCount);
	const listaBiOrdenada = ordenarListaBidimensional(listaArray, 1);
	const listaBiOrdenadaMaxNumber = listaBiOrdenada[listaBiOrdenada.length - 1];
	// console.log({listaCount, listaArray, listaBiOrdenada, listaBiOrdenadaMaxNumber});
	// console.log('La moda es: ' + listaBiOrdenadaMaxNumber[0]);
	const moda = listaBiOrdenadaMaxNumber[0];
	return moda;
}


// Ordenar una lista de listas o lista bidimensional

// function ordenarListaBidimensional(listaBiDesordenada) {
// 	function ordenarListaBiSort(valorAcumulado, nuevoValor) {
// 		return valorAcumulado[1] - nuevoValor[1]; // Ordena la lista de menor a mayor
// 	}

// 	const lista = listaBiDesordenada.sort(ordenarListaBiSort);
// 	return lista;
// }

function ordenarListaBidimensional(listaBiDesordenada,i) {
	function ordenarListaBiSort(valorAcumulado, nuevoValor) {
		return valorAcumulado[i] - nuevoValor[i]; // Ordena la lista de menor a mayor
	}

	const lista = listaBiDesordenada.sort(ordenarListaBiSort);
	return lista;
}

// Reto: Transformar Objetos en Arrays

const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra'
};

function solution(obj) {
	const array = Object.entries(obj);
	const arrayFinal = [];
	array.forEach((arr) => {
		arrayFinal.push({
			id: arr[0],
			name: arr[1]
		})
	})
	// console.log({
	// 	array, 
	// 	arrayFinal
	// });
	return arrayFinal;
}

solution(obj);

// Calculando el promedio ponderado

const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2
  },
  {
    course: "Programación",
    note: 8,
    credit: 5
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5
  }
];

const notesWithCredit = notes.map(function (noteObject) {
	return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
	function (sum = 0, newVal) {
		return sum + newVal;
	}
);

const credits = notes.map(function (noteObject) {
	return noteObject.credit;
});

const sumOfCredits = credits.reduce(
	function (sum = 0, newVal) {
		return sum + newVal;
	}
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

// console.log({
// 	notes,
// 	notesWithCredit,
// 	sumOfNotesWithCredit,
// 	credits,
// 	sumOfCredits,
// 	promedioPonderadoNotasConCreditos
// });


// Calculando el rango medio

const mobilesPrices = [
	{
		brand: "Samsung",
		price: 50 
	},
	{
		brand: "Samsung",
		price: 150 
	},
	{
		brand: "Samsung",
		price: 550
	},
	{
		brand: "Samsung",
		price: 40 
	},
	{
		brand: "Samsung",
		price: 230
	},
	{
		brand: "Samsung",
		price: 50
	}
];

function calcularRangoMedio(objetcList) {
	const mobilePriceList = objetcList.map(function (mobilesPricesObject) {
		return mobilesPricesObject.price;
	});
	
	const mobilePriceOrderedList = ordenarLista(mobilePriceList);
	const highValue = mobilePriceOrderedList[mobilePriceOrderedList.length - 1];
	const lowValue = mobilePriceOrderedList[0];
	const sumOfHighValueWithLowValue = highValue + lowValue;
	const rangoMedio = sumOfHighValueWithLowValue / 2;

	// console.log({
	// 	mobilePriceList,
	// 	mobilePriceOrderedList,
	// 	highValue,
	// 	lowValue,
	// 	sumOfHighValueWithLowValue,
	// 	rangoMedio
	// });
	return `Los teléfonos de precio medio tendrían un precio de alrededor de $${rangoMedio}`;
}

calcularRangoMedio(mobilesPrices); // 'Los teléfonos de precio medio tendrían un precio de alrededor de $295'
console.log(calcularRangoMedio(mobilesPrices)); // Los teléfonos de precio medio tendrían un precio de alrededor de $295