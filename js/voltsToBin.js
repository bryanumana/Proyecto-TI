// Funcion que llena ceros
var putZerosBefore = (tam, chain) => {
    let howManyZeros = tam - chain.length;
    let zeros = "";
    for (var i = 0; i < howManyZeros; i++) {
        zeros += "0";
    }
    zeros += chain;
    return zeros;
}

// Funcion que convierte el binario a cadena de binarios
const createBinaryArraya = (cadenaBinaria) => {
    console.log(cadenaBinaria)
    console.log(cadenaBinaria.length)
    let arrayBinarios = []
    let flag = 0;
    while (flag < cadenaBinaria.length) {
        let chain = ""
        for (var i = 0; i < baseCodificacion; i++) {
            if (flag >= cadenaBinaria.length) {
                chain = putZeros(chain);
                break;
            }
            chain += cadenaBinaria[flag];
            flag++;
        }
        arrayBinarios.push(chain)
    }
    console.log(arrayBinarios)
    return arrayBinarios;
}

//Recibe la cadena y la convierte a un arreglo
const createArrayFromString = (chainArray) => {
    chain = chainArray.toString()
    let response = chain
        .substring(1, chainArray.length - 1)
        .trim()
        .split(", ")
    console.log(response)

    return response
}

//Valida la cadena (signo, segmento, intervalo)
const validateString = (array) => {
    let binaryArray = []
    for (var i = 0; i < array.length; i++) {
        let binary = ""
        let decimal = parseFloat(array[i])
        if (decimal < 0)
            binary += "0"
        else
            binary += "1"
        decimal = Math.abs(decimal)

        // Busqueda de segmento
        // Hacer un arbol o un hash para renderizar la busqueda en el dict
        flag = iterArrays(arraySegmentos, decimal)
        console.log("decimal -> " + decimal)
        console.log(flag)
        binary += putZerosBefore(bitsSegmento, flag.toString(2))

        decimal -= arraySegmentos[flag]
        console.log("Intervalo -> " + decimal)

        // Busqueda de intervalo
        // Hacer un arbol o un hash para renderizar la busqueda en el dict
        flag = iterArrays(arrayIntervalos, decimal)
        binary += putZerosBefore(bitsIntervalo, flag.toString(2))

        binaryArray.push(binary)
    }
    console.log(binaryArray)
    return binaryArray
}

// Funcion que itera los arreglos
const iterArrays = (array, decimal) => {
    var flag = 0
    let tamSuperior = array.length - 2
    let decimalArray0 = parseFloat(array[tamSuperior])
    if (decimal > decimalArray0)
        flag = array[array.length - 1]
    else if (decimal < array[0])
        flag = 0
    else {
        for (flag = 1; flag < tamSuperior; flag++) {
            decimalArraySegmento = parseFloat(array[flag])
            decimalArraySegmento2 = parseFloat(array[flag + 1])
            if (decimal > decimalArraySegmento && decimal < decimalArraySegmento2) {
                break
            }
        }
    }

    return flag
}