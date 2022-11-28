console.log(salarios);

// Análisis personal para Juanita
// const personaEnBusqueda = 'Juanita';
// const personaEnBusqueda = 'Bruce';

// const persona = salarios.find((persona) => {
// 	return persona.name == personaEnBusqueda;
// });

function encontrarPersona(personaEnBusqueda) {
	return salarios.find(persona => persona.name == personaEnBusqueda);

	// const persona = salarios.find((persona) => {
	// 	return persona.name == personaEnBusqueda;
	// });
	// return persona;
}

encontrarPersona('Juanita') // {name: 'Juanita', trabajos: Array(6)}
encontrarPersona('Daniela') // {name: 'Daniela', trabajos: Array(6)}

function medianaPorPersona(nombrePersona) {
	const trabajos = encontrarPersona(nombrePersona).trabajos;
	// console.log(trabajos);

	const salarios = trabajos.map(function (elemento) {
		return elemento.salario;
	});
	// console.log(salarios);

	const medianaSalarios = Estadistica.calcularMediana(salarios);
	// console.log(medianaSalarios);
	return medianaSalarios;
}

medianaPorPersona('Juanita') // 950
medianaPorPersona('Daniela') // 525
console.log(medianaPorPersona('Daniela')); // 525

// Proyección salarial personal

function proyeccionPorPersona(nombrePersona) {
	const trabajos = encontrarPersona(nombrePersona).trabajos;

	let porcentajesCrecimiento = []; // Contador y/o objetivo

	for (let i = 1; i < trabajos.length; i++) {
		const salarioActual = trabajos[i].salario;
		const salarioAnterior = trabajos[i - 1].salario;
		const crecimiento = salarioActual - salarioAnterior;
		const porcentajeCrecimiento = crecimiento / salarioAnterior;
		porcentajesCrecimiento.push(porcentajeCrecimiento);
		// console.log({salarioActual, salarioAnterior, crecimiento, porcentajeCrecimiento, porcentajesCrecimiento});
	}
	
	const medianaPorcentajesCrecimiento = Estadistica.calcularMediana(porcentajesCrecimiento);
	const ultimoSalario = trabajos[trabajos.length - 1].salario;
	const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
	const nuevoSalario = ultimoSalario + aumento;
	
	// console.log({trabajos, porcentajesCrecimiento, medianaPorcentajesCrecimiento, ultimoSalario, aumento, nuevoSalario});
	return nuevoSalario;
}