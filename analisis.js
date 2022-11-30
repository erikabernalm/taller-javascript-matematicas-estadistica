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

// Reestructurando información sobre la marcha
// Análisis salarial empresarial

const empresas = {};
for (persona of salarios) {
	for (trabajo of persona.trabajos) {
		if (!empresas[trabajo.empresa]) {
			empresas[trabajo.empresa] = {};	
		}

		if (!empresas[trabajo.empresa][trabajo.year]) {
			empresas[trabajo.empresa][trabajo.year] = [];
		}

		empresas[trabajo.empresa][trabajo.year].push(trabajo.salario); 
	}
}

console.log({empresas});

// Salarios empresariales
// Calcular la Mediana de salarios de una empresa en un año en específico

function medianaEmpresaYear(nombre, year) {
	if (!empresas[nombre]) {
		console.warn('La empresa no existe');
	} else if (!empresas[nombre][year]) {
		console.warn('La empresa no dio salarios ese año');
	} else {
		return Estadistica.calcularMediana(empresas[nombre][year]);
	}
}

// Proyección de salarios por empresas

function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });

    let porcentajesCrecimiento = []; // Contador y/o objetivo

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioAnterior = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioAnterior;
      const porcentajeCrecimiento = crecimiento / salarioAnterior;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
      // console.log({salarioActual, salarioAnterior, crecimiento, porcentajeCrecimiento, porcentajesCrecimiento});
    }

    const medianaPorcentajesCrecimiento = Estadistica.calcularMediana(porcentajesCrecimiento);
    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    console.log({empresaYears, listaMedianaYears, porcentajesCrecimiento, medianaPorcentajesCrecimiento, ultimaMediana, aumento, nuevaMediana});
    return nuevaMediana;
  }
}