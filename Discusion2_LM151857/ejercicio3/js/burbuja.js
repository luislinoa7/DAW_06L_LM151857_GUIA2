function sortValues() {
    // Obtener los valores ingresados por el usuario
    const inputValues = document.getElementById("values").value;
    const order = document.getElementById("order").value;

    // Dividir los valores por comas y convertirlos en un array de números
    const valuesArray = inputValues.split(",").map(Number);

    // Llamar a la función de ordenamiento por burbuja
    const sortedArray = bubbleSort(valuesArray, order);

    // Mostrar los valores originales y ordenados
    document.getElementById("originalValues").textContent = "Valores Ingresados: " + valuesArray.join(", ");
    document.getElementById("sortedValues").textContent = "Valores Ordenados: " + sortedArray.join(", ");
}

function bubbleSort(arr, order) {
    const len = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < len - 1; i++) {
            if ((order === "ascendente" && arr[i] > arr[i + 1]) || (order === "descendente" && arr[i] < arr[i + 1])) {
                // Intercambiar elementos si están en el orden incorrecto
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}
