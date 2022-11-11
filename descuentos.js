const inputPrice = document.querySelector('#price');
// const inputDiscount = document.querySelector('#discount'); // Selectores
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento); // AQUÍ estamos escuchando el evento de 'click', o sea el evento de que presionaron el botón

// const couponsObj = { // Objeto
// 	'Gold': 30,
// 	'Silver': 20,
// 	'Bronze': 15
// };

const couponsArray = []; // Array
// Combinación de arrays con objetos...Array de objetos
couponsArray.push({ 
	name: 'Gold',
	discount: 30
});
couponsArray.push({ 
	name: 'Silver',
	discount: 20
});
couponsArray.push({ 
	name: 'Bronze',
	discount: 15
});

// function calcularPrecioConDescuento() {
// 	const price = Number(inputPrice.value);
// 	// const discount = Number(inputDiscount.value);
// 	const coupon = inputCoupon.value;
	
// 	if (!price || !coupon) {
// 		pResult.innerText = 'Por favor llena el formulario';
// 		return;
// 	}
	
// 	let discount; 

// 	switch (coupon) {
// 		case 'Gold':
// 			discount = 30;
// 			break;
// 		case 'Silver':
// 			discount = 20;
// 			break;
// 		default:
// 			pResult.innerText = 'El cupón no es válido';
// 		  return;
// 	}

// 	// Otra forma de hacerlo
// 	// if (coupon == 'Gold') {
// 	// 	discount = 30;
// 	// } else if (coupon == 'Silver') {
// 	// 	discount = 20;
// 	// } else {
// 	// 	pResult.innerText = 'El cupón no es válido';
// 	// 	return;
// 	// }


// 	// console.log({ price, discount });

// 	// if (!price || !discount) {
// 	// 	pResult.innerText = 'Por favor llena el formulario';
// 	// 	return;
// 	// }

// 	// if (discount > 100) {
// 	// 	pResult.innerText = 'Tal descuento NO existe, por favor paga!';
// 	// 	return;
// 	// }

// 	const newPrice = (price * (100 - discount)) / 100;

// 	pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
// }


// Método find vs. método filter

function calcularPrecioConDescuento() {
	const price = Number(inputPrice.value);
	const coupon = inputCoupon.value;
	
	if (!price || !coupon) {
		pResult.innerText = 'Por favor llena el formulario';
		return;
	}
	
	let discount; 

	// couponElement es cada uno de los elementos/objetos del array
	function isCouponInArray(couponElement) {
		return couponElement.name == coupon;
	}

	// const couponInArray = couponsArray.filter(isCouponInArray); // [{}] nos devuelve un array con el elemento/objeto que coincide o con el que se hizo Match 
	const couponInArray = couponsArray.find(isCouponInArray); // {} nos devuelve un elemento/objeto que coincide o con el que se hizo Match 


	// Reducción de condicionales y uso de arrays
	// Uso de arrays y método filter()
	// if (couponInArray.length > 0) {
	// 	discount = couponInArray[0].discount;
	// } else {
	// 	pResult.innerText = 'El cupón no es válido';
 	// 	return;
	// }

	// Reducción de condicionales y uso de arrays
	// Uso de arrays y método find()
	if (couponInArray) {
		discount = couponInArray.discount;
	} else {
		pResult.innerText = 'El cupón no es válido';
 		return;
	}

	console.log({
		coupon,
		discount,
		couponInArray,
		couponsArray
	});

	// Reducción de condicionales y uso de objetos
	// if (couponsObj[coupon]) {
	// 	discount = couponsObj[coupon];
	// } else {
	// 	pResult.innerText = 'El cupón no es válido';
 	// 	return;
	// }

	const newPrice = (price * (100 - discount)) / 100;

	pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}