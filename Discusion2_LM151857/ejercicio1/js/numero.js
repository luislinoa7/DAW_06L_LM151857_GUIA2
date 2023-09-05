function analizarNumero() {
    const numero = document.getElementById("numeroInput").value;
    
    // Validar si se ingresó un número válido
    if (!numero || isNaN(numero)) {
        alert("Por favor, ingrese un número entero válido.");
        return;
    }

    // Convertir el número a una cadena para analizar cada dígito
    const numeroStr = Math.abs(numero).toString();

    const cantidadCifras = numeroStr.length;
    let cantidadCifrasImpares = 0;
    let cantidadCifrasPares = 0;
    let sumaCifrasImpares = 0;
    let sumaCifrasPares = 0;
    let sumaTotal = 0;
    let cifraMayor = 0;
    let cifraMenor = 9;

    for (let i = 0; i < cantidadCifras; i++) {
        const cifra = parseInt(numeroStr[i]);
        sumaTotal += cifra;

        if (cifra % 2 === 0) {
            cantidadCifrasPares++;
            sumaCifrasPares += cifra;
        } else {
            cantidadCifrasImpares++;
            sumaCifrasImpares += cifra;
        }

        if (cifra > cifraMayor) {
            cifraMayor = cifra;
        }

        if (cifra < cifraMenor) {
            cifraMenor = cifra;
        }
    }

    // Mostrar los resultados en el div de resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Cantidad de cifras: ${cantidadCifras}</p>
        <p>Cantidad de cifras impares: ${cantidadCifrasImpares}</p>
        <p>Cantidad de cifras pares: ${cantidadCifrasPares}</p>
        <p>Suma de cifras impares: ${sumaCifrasImpares}</p>
        <p>Suma de cifras pares: ${sumaCifrasPares}</p>
        <p>Suma de todas las cifras: ${sumaTotal}</p>
        <p>Cifra mayor: ${cifraMayor}</p>
        <p>Cifra menor: ${cifraMenor}</p>
    `;
}
