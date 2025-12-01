const documento = "../JS/tablaDeEnergiaRenovable.csv"

async function cargaDocumento() {
    const tableBody = document.getElementById("cuerpo")
    const titulos = document.querySelector("#encabezado")

    const datos = await fetch(documento)
    const texto = await datos.text()

    const separador = texto.split("\n")
    const cuerpo = separador.slice(1)

    //crear los encabezados
    titulos.replaceChildren(" ")
    const encabezado = separador[0].split(",")

    for (var i = 0; i <= encabezado.length; i++) {
        if (i != encabezado.length) {
            const columnas = document.createElement("th")
            const nodo = document.createTextNode(encabezado[i])
            columnas.appendChild(nodo)
            titulos.appendChild(columnas)
        }
    }

    //recorre los datos y los inserta
    tableBody.replaceChildren(" ")
    cuerpo.forEach((separador) => {
        const columnas = separador.split(",")
        const fila = document.createElement("tr")
        columnas.forEach((dato) => {
            const celda = document.createElement("th")
            celda.textContent = dato.trim()
            fila.appendChild(celda)
        })
        tableBody.appendChild(fila)
    })
}

cargaDocumento();