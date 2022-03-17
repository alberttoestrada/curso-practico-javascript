const precioOriginal = 120;
const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const pircevalue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountvalue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (pircevalue, discountvalue);

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });