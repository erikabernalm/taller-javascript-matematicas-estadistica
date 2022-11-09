const inputPrice = document.querySelector('#price');
// const inputDiscount = document.querySelector('#discount'); // Selectores
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento); // AQUÍ estamos escuchando el evento de 'click', o sea el evento de que presionaron el botón

function calcularPrecioConDescuento() {
	const price = Number(inputPrice.value);
	// const discount = Number(inputDiscount.value);
	const coupon = inputCoupon.value;
	
	if (!price || !coupon) {
		pResult.innerText = 'Por favor llena el formulario';
		return;
	}
	
	let discount; 

	switch (coupon) {
		case 'Gold':
			discount = 30;
			break;
		case 'Silver':
			discount = 20;
			break;
		default:
			pResult.innerText = 'El cupón no es válido';
		  return;
	}

	// Otra forma de hacerlo
	// if (coupon == 'Gold') {
	// 	discount = 30;
	// } else if (coupon == 'Silver') {
	// 	discount = 20;
	// } else {
	// 	pResult.innerText = 'El cupón no es válido';
	// 	return;
	// }


	// console.log({ price, discount });

	// if (!price || !discount) {
	// 	pResult.innerText = 'Por favor llena el formulario';
	// 	return;
	// }

	// if (discount > 100) {
	// 	pResult.innerText = 'Tal descuento NO existe, por favor paga!';
	// 	return;
	// }

	const newPrice = (price * (100 - discount)) / 100;

	pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}