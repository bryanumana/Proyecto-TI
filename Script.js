'use-strict'
const alfabeto32 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "2", "3", "4", "5",
    "6", "7"
];

const alfabeto64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "+", "/", "="
];

const alfabeto128 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "+", "/", " ", "á", "é", "í", "ó", "ú",
    "Á", "É", "Í", "Ó", "Ú", "!", "\u0022", "#", "$", "%",
    "&", "'", "(", ")", "*", ",", "-", ".", "\"", ":",
    ";", "<", "=", ">", "?", "@", "[", "]", "^", "_",
    "`", "{", "|", "}", "~", "¡", "¢", "£", "¤", "¥",
    "¦", "’", "¨", "©", "ª", "«", "¬", "®", "¯", "°",
    "±", "²", "³", "´", "µ", "¶", "·", "¸"
];

const alfabeto256 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "+", "/", " ", "á", "é", "í", "ó", "ú",
    "Á", "É", "Í", "Ó", "Ú", "!", "\u0022", "#", "$", "%",
    "&", "'", "(", ")", "*", ",", "-", ".", "\"", ":",
    ";", "<", "=", ">", "?", "@", "[", "]", "^", "_",
    "`", "{", "|", "}", "~", "¡", "¢", "£", "¤", "¥",
    "¦", "’", "¨", "©", "ª", "«", "¬", "®", "¯", "°",
    "±", "²", "³", "´", "µ", "¶", "·", "¸", "¹", "º",
    "»", "¼", "“", "¾", "¿", "À", "Â", "Ã", "Ä", "Å",
    "”", "Ç", "È", "Ê", "Ë", "Ì", "Î", "Ï", "Ð", "Ñ",
    "ñ", "Ò", "Ô", "Õ", "Ö", "×", "Ø", "Ù", "Û", "Ü",
    "Ý", "Þ", "ß", "à", "â", "ã", "ä", "å", "æ", "ç",
    "è", "ê", "ì", "î", "ï", "ð", "ò", "ô", "õ", "ö",
    "÷", "ø", "ù", "û", "ü", "ý", "þ", "ÿ", "Ā", "ā",
    "Ă", "ă", "Ą", "ą", "Ć", "ć", "Ĉ", "ĉ", "Ċ", "ċ",
    "Č", "č", "Ď", "Đ", "đ", "Ē", "ē", "Ĕ", "ĕ", "Ė",
    "ė", "Ę", "ę", "Ě", "ě", "Ĝ", "ĝ", "Ğ", "ğ", "Ġ",
    "ġ", "Ģ", "ģ", "Ĥ", "ĥ", "Ħ", "ħ", "Ĩ", "ĩ", "Ī",
    "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı", "Ĵ", "ĵ", "Ķ",
    "ķ", "Ĺ", "Ļ", "ļ", "Ľ", "ľ", "Ŀ", "ŀ", "Ł", "ł",
    "Ń", "ń", "Ņ", "ņ", "Ň", "ň"
];

var baseAlfabeto = 32;
var baseAlfabeto2 = 32;
var baseAlfabeto3 = 32;
var baseCodificacion = 8;
var bitsSegmento = 4;
var bitsIntervalo = 3;
var maximaExcursion = 1;
var arraySegmentos = []
var arrayIntervalos = []
var resultadoLista = [];
let listaSimbolos2 = [];
let decodeIMG;
let encodeIMG;

const metodo_Img = () => {
    document.getElementById("file").onchange = function(e) {

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            let preview = document.getElementById('preview'),
                image = document.createElement('img');


            image.src = reader.result;
            cadena = reader.result;
            const myArray = cadena.split("base64,");

            preview.innerHTML = '';

            preview.append(image);
            encodeIMG = encode(myArray[1])

            decodeIMG = decode(encodeIMG);

            // decode( encodeIMG );
            // baseIMG = 64;
            // decodeIMG = decode( encodeIMG );

            console.log(decodeIMG.join(''));

            document.querySelector('#txtArea').value = decodeIMG.join('');

            // <img src='data:image/png;base64, (base64) '/>
            // return myArray[1];
        };

    }
}


// FUNCION QUE CODIFICA

const encode = (palabraEntrada) => {
    console.log(palabraEntrada);
    if (listaSimbolos2.length == 0) {
        listaSimbolos = palabraEntrada.match(/.{1}/g);
    } else {
        listaSimbolos = listaSimbolos2.concat();
        listaSimbolos2 = [];
    };
    try {
        let { listaPalabras } = codificacion64(listaSimbolos);
        console.log(listaPalabras);
        let cadenaBin = listaPalabras.map(palabra => palabra.binario).toString().split(',').join('')
        console.log("Codificado", cadenaBin);
        return cadenaBin;
    } catch (error) {
        console.log("Error: ", error);
    };
}


// FUNCION QUE DECODIFICA

const decode = (cadenaBin) => {
    // DECODIFICACIÓN
    try {
        console.log('Datos enviados a decodificación:', baseAlfabeto3, cadenaBin);
        let palabraDecodificada = decodificacion64(baseAlfabeto3, cadenaBin);
        console.log('palabra decodificada', palabraDecodificada);
        return palabraDecodificada;
    } catch (error) {
        console.log("Error: ", error);
    };
}

const imgShow = () => {
    let imgPreview = document.getElementById('preview-img'),
        image2 = document.createElement('img');
    if ((document.querySelector('#txtArea').value == cod32) || (document.querySelector('#txtArea').value == cod128) || (document.querySelector('#txtArea').value == cod256)) {
        decodeIMG = "iVBORw0KGgoAAAANSUhEUgAAABQAAAAsCAIAAADqwg+aAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAUUlEQVRIiWP8//8/A7mAiWydo5rprJkFmcPIyEiSZtJUo6UoRmQ+bW1Gs3xE2DxwoT1q86jNo7mKSjbjqoZHvM2kWk5Vm0kCQ7hlQDCEaRJgAPymYwqfrEz5AAAAAElFTkSuQmCC";
    } else {
        decodeIMG = document.querySelector('#txtArea').value;
    }

    image2.src = `data:image/png;base64,${ decodeIMG }`
    console.log(image2.src);
    // <img src='data:image/png;base64, (base64) '/>
    imgPreview.innerHTML = '';
    imgPreview.append(image2);
}

//Selección de alfabetos.
function seleccionarAlfabeto() {
    switch (baseAlfabeto) {
        case 32:
            return alfabeto32;
        case 64:
            return alfabeto64;
        case 128:
            return alfabeto128;
        case 256:
            return alfabeto256;
        default:
            return alfabeto64;
    };
};

function seleccionarAlfabeto2() {
    switch (baseAlfabeto2) {
        case 32:
            return alfabeto32;
        case 64:
            return alfabeto64;
        case 128:
            return alfabeto128;
        case 256:
            return alfabeto256;
        default:
            return alfabeto64;
    };
};

function seleccionarAlfabeto3() {
    switch (baseAlfabeto3) {
        case 32:
            return alfabeto32;
        case 64:
            return alfabeto64;
        case 128:
            return alfabeto128;
        case 256:
            return alfabeto256;
        default:
            return alfabeto64;
    };
};


//Funciones que codifican: Texto, Imagen.
const codificacion = (listaSimbolos) => {
    let listaPalabras = [];

    if (listaSimbolos.length == 0) {
        throw "Debe ingresar al menos un caracter";
    };
    let longitudBinAlfabeto = (baseAlfabeto - 1).toString(2).length;
    for (let simbolo of listaSimbolos) {
        let objSimbolo = {
            "valor": 0,
            "simbolo": simbolo,
        };

        let encontrado = false;

        let alfabetoElegido = seleccionarAlfabeto();
        for (let i = 0; i < alfabetoElegido.length; i++) {
            encontrado = String(simbolo) == String(alfabetoElegido[i]);
            if (encontrado) {
                objSimbolo.valor = i;
                objSimbolo["binario"] = i.toString(2);
                if (objSimbolo["binario"].length < longitudBinAlfabeto) {
                    let longitudBin = objSimbolo["binario"].length;
                    for (let j = 0; j < longitudBinAlfabeto - longitudBin; j++) {
                        objSimbolo["binario"] = "0" + objSimbolo["binario"];
                    };
                };
                break;
            };
        };
        if (!encontrado) { throw "Uno de los caracteres ingresados no esta dentro del alfabeto del sistema"; };
        listaPalabras.push(objSimbolo);
    };
    return { listaPalabras };
};

const codificacion64 = (listaSimbolos) => {
    let listaPalabras = [];

    if (listaSimbolos.length == 0) {
        throw "Debe ingresar al menos un caracter";
    };
    let longitudBinAlfabeto = (64 - 1).toString(2).length;
    for (let simbolo of listaSimbolos) {
        let objSimbolo = {
            "valor": 0,
            "simbolo": simbolo,
        };

        let encontrado = false;

        let alfabetoElegido = alfabeto64;
        for (let i = 0; i < alfabetoElegido.length; i++) {
            encontrado = String(simbolo) == String(alfabetoElegido[i]);
            if (encontrado) {
                objSimbolo.valor = i;
                objSimbolo["binario"] = i.toString(2);
                if (objSimbolo["binario"].length < longitudBinAlfabeto) {
                    let longitudBin = objSimbolo["binario"].length;
                    for (let j = 0; j < longitudBinAlfabeto - longitudBin; j++) {
                        objSimbolo["binario"] = "0" + objSimbolo["binario"];
                    };
                };
                break;
            };
        };
        if (!encontrado) { throw "Uno de los caracteres ingresados no esta dentro del alfabeto del sistema"; };
        listaPalabras.push(objSimbolo);
    };
    return { listaPalabras };
};


//Funciones que decodifican: Texto, Imagen.

const decodificacion = (baseAlfabeto2, binarioEntrada) => {

    console.log("Lo que entra en decodificación ", baseAlfabeto2, binarioEntrada);
    let longitudBinAlfabeto = (baseAlfabeto2 - 1).toString(2).length;
    if (binarioEntrada.length == 0) {
        throw "Debe ingresar una cadena binaria de entrada";
    };
    if (binarioEntrada.length % longitudBinAlfabeto != 0) {
        let relleno = longitudBinAlfabeto - (binarioEntrada.length % longitudBinAlfabeto);
        for (let i = 0; i < relleno; i++) {
            binarioEntrada = binarioEntrada + "0";
        };
    };
    let cadenaAuxiliar = "";
    let agrupacionCodigos = [];
    for (let i = 0; i < binarioEntrada.length; i++) {
        if (binarioEntrada[i] != "1" && binarioEntrada[i] != "0") {
            throw "Debe ingresar una cadena binaria de entrada";
        };
        cadenaAuxiliar = cadenaAuxiliar + binarioEntrada[i];
        if (cadenaAuxiliar.length == longitudBinAlfabeto) {
            agrupacionCodigos.push(parseInt(cadenaAuxiliar, 2));
            cadenaAuxiliar = "";
        };
    };
    let alfabetoElegido = seleccionarAlfabeto2();
    let palabraDecodificada = [];
    for (let i = 0; i < agrupacionCodigos.length; i++) {
        for (let caracter of alfabetoElegido) {
            if (parseInt(alfabetoElegido.indexOf(caracter)) == agrupacionCodigos[i]) {
                palabraDecodificada.push(caracter);
            };
        };
    };
    return palabraDecodificada;
};

const decodificacion64 = (baseAlfabeto3, binarioEntrada) => {

    console.log("Lo que entra en decodificación ", baseAlfabeto3, binarioEntrada);
    let longitudBinAlfabeto = (baseAlfabeto3 - 1).toString(2).length;
    if (binarioEntrada.length == 0) {
        throw "Debe ingresar una cadena binaria de entrada";
    };
    if (binarioEntrada.length % longitudBinAlfabeto != 0) {
        let relleno = longitudBinAlfabeto - (binarioEntrada.length % longitudBinAlfabeto);
        for (let i = 0; i < relleno; i++) {
            binarioEntrada = binarioEntrada + "0";
        };
        //throw "Cadena binaria incompleta";
    };
    let cadenaAuxiliar = "";
    let agrupacionCodigos = [];
    for (let i = 0; i < binarioEntrada.length; i++) {
        if (binarioEntrada[i] != "1" && binarioEntrada[i] != "0") {
            throw "Debe ingresar una cadena binaria de entrada";
        };
        cadenaAuxiliar = cadenaAuxiliar + binarioEntrada[i];
        if (cadenaAuxiliar.length == longitudBinAlfabeto) {
            agrupacionCodigos.push(parseInt(cadenaAuxiliar, 2));
            cadenaAuxiliar = "";
        };
    };
    let alfabetoElegido = seleccionarAlfabeto3();
    let palabraDecodificada = [];
    for (let i = 0; i < agrupacionCodigos.length; i++) {
        for (let caracter of alfabetoElegido) {
            if (parseInt(alfabetoElegido.indexOf(caracter)) == agrupacionCodigos[i]) {
                palabraDecodificada.push(caracter);
            };
        };
    };
    return palabraDecodificada;
};

const response = (inputPalabra) => {
    let palabraEntrada = inputPalabra.value;
    let listaSimbolos = [];

    let resultado = [];

    if (listaSimbolos2.length == 0) {
        listaSimbolos = palabraEntrada.match(/.{1}/g);
    } else {
        listaSimbolos = listaSimbolos2.concat();
        listaSimbolos2 = [];
    };

    let cadenaBin = []

    try {
        let { listaPalabras } = codificacion(listaSimbolos);
        for (let binario of listaPalabras) {
            resultadoLista.innerHTML += "<li>" + binario.simbolo + " : " + binario.binario + " </li>";
        };
        resultado.innerHTML = "<br>";
        cadenaBin = listaPalabras.map(palabra => palabra.binario).toString().split(',').join('')
        resultado.innerHTML = "<br>";
    } catch (error) {
        alert("Hubo un inconveniente: " + error);
        resultado.innerHTML = "";
        console.log("Error: ", error);
    };

    return cadenaBin;
}

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

        result = arraySegmentos[posSegmento] + (arrayIntervalos[posIntervalo] / 2)

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
    for (var i = 0; i < tam; i++) {
        actualExcursion += tempExcursion
        arrayTamanios.push(actualExcursion)
    }
    console.log(arrayTamanios)
    return arrayTamanios
}


window.addEventListener('load', () => {

    var selector = document.querySelector("#cmbSeleccion1");
    var selector2 = document.querySelector("#cmbSeleccion2");
    var selectorVoltajes = document.querySelector("#cmbSeleccion1Voltajes");
    var selector2Voltajes = document.querySelector("#cmbSeleccion2Voltajes");
    var btnCalcula = document.querySelector("#btnCodificarTexto");
    var inputPalabra = document.querySelector("#txtCodificarTexto");
    var btnCalculaVoltajes = document.querySelector("#btnCodificarTextoVoltajes");
    var inputPalabraVoltajes = document.querySelector("#txtCodificarTextoVoltajes");
    var outputPalabra = document.querySelector("#txtDecodificarTexto");
    var btnReCalcula = document.querySelector("#btnDecodificarTexto");

    var btnImagen = document.querySelector("#btnMostrarImagen");
    var selector3 = document.querySelector("#cmbSeleccion3");

    metodo_Img();

    btnImagen.addEventListener('click', () => {
        try {
            document.querySelector('#txtArea').value != '' ?
                imgShow() :
                alert('No se ha codificaco la imagen');
        } catch (error) {
            throw error;
        }
    })


    selector.addEventListener('change', () => {
        baseAlfabeto = parseInt(document.querySelector("#cmbSeleccion1").value);
    });

    selectorVoltajes.addEventListener('change', () => {
        baseAlfabeto = parseInt(document.querySelector("#cmbSeleccion1Voltajes").value);
    });

    btnCalcula.addEventListener('click', () => {
        document.querySelector("#listabin").value = response(inputPalabra);
    });

    btnCalculaVoltajes.addEventListener('click', () => {
        // Codificador uniforme
        // El codificador no uniforme no debe presentar mayor problema, solo se debe varias veces la funcion
        // de crear los arreglos de los segmentos e intervalos y cambiar sus parametros
        let tamSegmento = 2 ** bitsSegmento
        let excursionSegmentos = maximaExcursion / tamSegmento

        let tamIntervalo = 2 ** bitsIntervalo
        let excursionIntervalos = excursionSegmentos / tamIntervalo

        let cadenaBinaria = response(inputPalabraVoltajes)
        let arrayBinario = createBinaryArray(cadenaBinaria)

        arraySegmentos = calculoSegmentosEIntervalos(tamSegmento, excursionSegmentos)
        arrayIntervalos = calculoSegmentosEIntervalos(tamIntervalo, excursionIntervalos)

        document.querySelector('#listaVoltajes').value = "[" +
            loQueSeaFunc(arrayBinario).join(", ") + "]"
    });

    selector2.addEventListener('change', function() {
        baseAlfabeto2 = parseInt(document.querySelector("#cmbSeleccion2").value);
    });

    selector2Voltajes.addEventListener('change', function() {
        baseAlfabeto2 = parseInt(document.querySelector("#cmbSeleccion2Voltajes").value);
    });

    btnReCalcula.addEventListener('click', function() {
        let binarioEntrada = document.querySelector("#listabin").value;
        try {
            let palabraDecodificada = decodificacion(baseAlfabeto2, binarioEntrada);
            resultadoLista.innerHTML = "";
            resultadoLista.innerHTML += "Esta es su decodificacion en <strong>base " + baseAlfabeto + "</strong>: " + palabraDecodificada.join('');
            outputPalabra.value = palabraDecodificada.join('')
        } catch (error) {
            alert("Hubo un inconveniente: " + error);
            resultado.innerHTML = "";
            console.log("Error: ", error);
        };
    });

    selector3.addEventListener('change', () => {
        baseAlfabeto3 = parseInt(document.querySelector("#cmbSeleccion3").value);
    });


});

var cod32 = "RFIE4RYNBINAUAAAAAGUSSCEKIAAAAAUAAAAALAIAIAAAAHKYIHZUAAAAAEXASCZOMAAADWEAAAA5RABSUVQ4GYAAAAFCSKEIFKERCLD7T776PYDXGAIS3E5UONOTLEZAWM4HSGIJCJGNUSUUOSSQRTEHZWW2RVTPRCNQPDQUE6WV45IZWR3TCSKG3R2VBSHXTG2IWSOKWNUSASDXBSUAMEENEJGAAH4UZRQVH5MJT4QAAAAABEUKTSEVZBGBAQ";
var cod128 = "ó*J`40UaFAAAA1SÍiU AAAoAAAF  IAAA6gµ~AAACuEé{|AAD AAdóA{lw¨¤AAAUpUiFoÍó¸%¸µ·D=[RW`¯Éa¬£TQs}HÍ`SSm2Ópj(ÚI|h²;¥js’óm[±¨&%tvdjbj=^Ój3O,Gj’Z;i¡c,#(gkd]Ú YhNRTABµ)Y]p¶xZ²AAAAClK$irÍmEI";
var cod256 = "Ã&$ÉNKaKAAANÓÍó(AAAUAAAsICAAAįĆPÖAAAJ¨Í:«AAOĈAAOĈBÑrObAAA'Óóá*ÍÃ_Ņňň/Dý¹Ã¤ÙàÖĮìÕFÕćČČÍÎ|ė*àãoÁ`+¥¥Áöµóĝ8¨Þ9¢ļæĒàýÄÚ2Ĩè¿ÉĀĒâ;$,×ÓCíü{ w½¡S[AŅä_KÜì\u0022\u0022łAAAAÓú$óïé[»";