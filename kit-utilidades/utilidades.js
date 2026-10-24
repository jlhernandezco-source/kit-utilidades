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

//Funcion calcularInteresesAhorro(capital, tasaAnual, anios, capitalizacionesPorAnio):
//calcula el interes compuesto de una caja de ahorro.
//tasaAnual en porcentaje (ej. 5 = 5%), capitalizacionesPorAnio: 12 mensual, 365 diaria, etc.
//Devuelve { montoFinal, intereses } redondeados a 2 decimales; lanza RangeError si los datos no son validos
function calcularInteresesAhorro(capital, tasaAnual, anios, capitalizacionesPorAnio = 12) {
    if (capital < 0) {
        throw new RangeError("El capital no puede ser negativo");
    }
    if (tasaAnual < 0) {
        throw new RangeError("La tasa anual no puede ser negativa");
    }
    if (anios < 0) {
        throw new RangeError("El tiempo no puede ser negativo");
    }
    if (capitalizacionesPorAnio <= 0) {
        throw new RangeError("Las capitalizaciones por año deben ser mayores a 0");
    }

    const tasaPorPeriodo = (tasaAnual / 100) / capitalizacionesPorAnio;
    const periodos = capitalizacionesPorAnio * anios;
    const montoFinal = capital * Math.pow(1 + tasaPorPeriodo, periodos);
    const intereses = montoFinal - capital;

    return {
        montoFinal: Math.round(montoFinal * 100) / 100,
        intereses: Math.round(intereses * 100) / 100
    };
}



