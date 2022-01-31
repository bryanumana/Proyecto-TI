// Funcion que llena ceros
var putZeros = (chain) => {
    let howManyZeros = 8 - chain.length;
    let zeros = "";
    for (var i = 0; i < howManyZeros; i++) {
        zeros += "0";
    }
    chain += zeros;
    return chain;
}

// Funcion que convierte el binario a cadena de binarios
const createBinaryArray = (cadenaBinaria) => {
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

// Funcion que calcula el segmento
const loQueSeaFunc = (arregloBinarios) => {
    let arrayResponses = []
    for (var i = 0; i < arregloBinarios.length; i++) {
        let chain = arregloBinarios[i]
        let bitDeSigno = chain[0]
        let bitsDeSegmento = chain.substring(1, bitsSegmento + 1)
        let bitsDeIntervalo = chain.substring(bitsSegmento + 1, chain.length + 1)

        posSegmento = parseInt(bitsDeSegmento, 2)
        posIntervalo = parseInt(bitsDeIntervalo, 2)

        result = arraySegmentos[posSegmento] + (arrayIntervalos[posIntervalo] + 1)

        if (bitDeSigno === "0")
            result = -result

        arrayResponses.push(result)
    }

    return arrayResponses
}

// Funcion que calcula los segmentos e intervalos
const calculoSegmentosEIntervalos = (tam, tempExcursion) => {
    let arrayTamanios = []
    let actualExcursion = 0
    console.log(tam)
    arrayTamanios.push(0)
    for (var i = 1; i < tam; i++) {
        actualExcursion += tempExcursion
        arrayTamanios.push(actualExcursion)
    }
    console.log(arrayTamanios)
    return arrayTamanios
}