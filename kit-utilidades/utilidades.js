//Funcion aplicardescuento(precio,porcentaje):devuelve el precio
//redondeado a 2 decimales; lanza rangeerror si porcentaje no
function aplicardescuento(precio, porcentaje) {         
    if (porcentaje < 0 || porcentaje > 100) {
       throw new RangeError("El porcentaje debe estar entre 0 y 100");
    }
    let descuento = precio * (porcentaje / 100);
    let precioFinal = precio - descuento;
    return Math.round(precioFinal * 100) / 100;
}

//funcion obtiene hipotenusa dados los catetos a y b
function obtieneHipotenusa(a, b) {
    return Math.sqrt(a * a + b * b);
}   

//funcion obtiene angulo dado los catetos a y b
function obtieneAngulo(a, b) {
    return Math.atan2(b, a) * (180 / Math.PI);
}



