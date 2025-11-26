function resultado() {
    const consumoMensual = document.getElementById("kwh").value;
    const consumoFloat = parseFloat(consumoMensual);
    const twh = convierteTwh(consumoFloat);
    const percent = 0.32;
    const resultado = ((twh*100)/percent).toFixed(5);
    const frase = "Su consumo promedio mensual fue de " + consumoMensual + "Kwh, lo que es equivalente al " + resultado + "% a la totalidad consumida de la fuente solar producida en el pais Colombiano con respecto al año 2021";

    //validar que la caja de entrada no esté vacía
    if (consumoMensual == "") {
        Swal.fire({
            title: '¡Error!',
            text: 'No hay datos ingresados',
            icon: 'error',
        })
        limpia();
    } else {
        Swal.fire({
            title: 'Conversión',
            text: frase,
            icon: 'success',
        })
        limpia();
    }
}

function convierteTwh(dato) {
    return (dato/1000000000)*12;
}

function limpia() {
    document.getElementById("kwh").value="";
}