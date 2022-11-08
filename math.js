// Fórmulas matemáticas en JavaScript

console.group('Cuadrado')

const ladoCuadrado = 5;

// Perímetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;

// Área del cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
	ladoCuadrado,
	perimetroCuadrado,
	areaCuadrado
});

function calcularCuadrado(lado) {
	return {
		perimetro: lado * 4,
		area: lado * lado
	};
}

console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

// Perímetro del triángulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

// Área del triángulo
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
	ladoTriangulo1,
	ladoTriangulo2,
	ladoTrianguloBase,
	alturaTriangulo,
	perimetroTriangulo,
	areaTriangulo
});

function calcularTriangulo(lado1, lado2, base, altura) {
	return {
		perimetro: lado1 + lado2 + base,
		area: (base * altura) / 2
	};
}

// Reto: altura de un triángulo

function calcularAlturaTrianguloIsosceles(lado1, base) {
	if (lado1 == base) {
		console.warn('Este no es un triángulo isósceles');
	} else {
		// const altura = Math.sqrt((lado1 ** 2) - ( (base ** 2) ) / 4);
		// return {altura}
		return Math.sqrt((lado1 ** 2) - ( (base ** 2) ) / 4);
	}
}

console.groupEnd('Triangulo')

// Math en JavaScript

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

// Perímetro del círculo
const circunferencia = diametroCirculo * PI;

// Área del círculo
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
	radioCirculo,
	diametroCirculo,
	PI,
	circunferencia,
	areaCirculo
});

function calcularCirculo(radio) {
	const diametro = radio * 2;
	// const radioAlCuadrado = radio * radio;
	// const radioAlCuadrado = radio ** 2;
	const radioAlCuadrado = Math.pow(radio, 2);

	// return {
	// 	circunferencia: diametro * PI, // AQUÍ accedemos a la variable creada en global
	// 	area: radioAlCuadrado * PI
	// };

	return {
		circunferencia: diametro * Math.PI,
		area: radioAlCuadrado * Math.PI.toFixed(10)
	};
}

console.groupEnd('Circle')






