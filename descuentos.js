const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount'); // Selectores
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento); // AQUÍ estamos escuchando el evento de 'click', o sea el evento de que presionaron el botón

function calcularPrecioConDescuento() {
	const price = Number(inputPrice.value);
	const discount = Number(inputDiscount.value);

	// console.log({ price, discount });

	if (!price || !discount) {
		pResult.innerHTML = 'Por favor llena el formulario';
		return;
	}

	if (discount > 100) {
		pResult.innerHTML = 'Tal descuento NO existe, por favor paga!';
		return;
	}

	const newPrice = (price * (100 - discount)) / 100;

	pResult.innerHTML = 'El nuevo precio con descuento es $' + newPrice;
}