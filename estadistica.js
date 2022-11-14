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
	console.log(promedio);
	return promedio;
}