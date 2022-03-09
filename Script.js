'use-strict'

const alfabeto64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "+", "/", "="
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
    "»", "¼", "½", "¾", "¿", "À", "Â", "Ã", "Ä", "Å",
    "Æ", "Ç", "È", "Ê", "Ë", "Ì", "Î", "Ï", "Ð", "Ñ",
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
    "Ń", "ń", "Ņ", "ņ", "Ň", "ň", "\010"
];

var baseAlfabeto = 256;
var baseAlfabeto2 = 256;
var baseAlfabeto3 = 64;
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

            // console.log(myArray[1]);  
            preview.innerHTML = '';
            preview.append(image);
            encodeIMG = encode(myArray[1])
            decodeIMG = decode(encodeIMG);

            console.log(decodeIMG.join(''));

            axios.post('http://127.0.0.1:5000/codificar', {
                    binary_chain: encodeIMG,
                    formula: document.querySelector("#inputFormula").value
                }, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                    document.querySelector('#txtArea').value = response.data["volts"];
                })
                .catch(function(error) {
                    console.log(error);
                });

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
    let img = document.getElementById('preview').innerHTML

    axios.post('http://127.0.0.1:5000/decodificar', {
            volts_chain: document.querySelector('#txtArea').value,
            formula: document.querySelector("#inputFormula").value
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
        .then(function(response) {
            console.log(response.data);
            let palabraDecodificada = decodificacion(baseAlfabeto2, response.data['bin_chain']);

            decodeIMG = decode(response.data['bin_chain']).join('');

            if (document.querySelector("#file").files[0].type.indexOf("pdf") != -1) {
                const linkSource = `data:application/pdf;base64,${decodeIMG}`;
                const downloadLink = document.createElement("a");
                const fileName = "abc.pdf";
                downloadLink.href = linkSource;
                downloadLink.download = fileName;
                downloadLink.click();

            } else {
                image2.src = `data:image/png;base64,${ decodeIMG }`
                console.log(image2.src);
                // <img src='data:image/png;base64, (base64) '/>
                imgPreview.innerHTML = img;
                imgPreview.append(image2);
                console.log("U:" + decodeIMG)
            }
        })
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


window.addEventListener('load', () => {




    var btnCalcula = document.querySelector("#btnCodificarTexto");
    var btnReCalcula = document.querySelector("#btnDecodificarVoltajes");
    var btnImagen = document.querySelector("#btnMostrarImagen");
    var inputPalabra = document.querySelector("#txtCodificarTexto");
    var outputPalabra = document.querySelector("#txtDecodificarTexto");
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

    btnCalcula.addEventListener('click', () => {

        let palabraEntrada = inputPalabra.value;
        let listaSimbolos = [];

        let resultado = [];

        if (listaSimbolos2.length == 0) {
            listaSimbolos = palabraEntrada.match(/.{1}/g);
        } else {
            listaSimbolos = listaSimbolos2.concat();
            listaSimbolos2 = [];
        };

        try {
            let { listaPalabras } = codificacion(listaSimbolos);
            for (let binario of listaPalabras) {
                resultadoLista.innerHTML += "<li>" + binario.simbolo + " : " + binario.binario + " </li>";
            };
            resultado.innerHTML = "<br>";
            let cadenaBin = listaPalabras.map(palabra => palabra.binario).toString().split(',').join('')
            axios.post('http://127.0.0.1:5000/codificar', {
                    binary_chain: cadenaBin,
                    formula: document.querySelector("#inputFormula").value
                }, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                    document.querySelector("#listabin").value = cadenaBin
                    document.getElementById('txtDecodificarTexto').innerHTML = response.data["volts"]
                })
                .catch(function(error) {
                    console.log(error);
                });

            resultado.innerHTML = "<br>";
        } catch (error) {
            alert("Hubo un inconveniente: " + error);
            resultado.innerHTML = "";
            console.log("Error: ", error);
        };
    });

    btnReCalcula.addEventListener('click', function() {
        let binarioEntrada = document.querySelector("#txtCodificarVoltajes").value;
        try {
            axios.post('http://127.0.0.1:5000/decodificar', {
                    volts_chain: binarioEntrada,
                    formula: document.querySelector("#inputFormula").value
                }, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                    let palabraDecodificada = decodificacion(baseAlfabeto2, response.data['bin_chain']);
                    resultadoLista.innerHTML = "";
                    resultadoLista.innerHTML += "Esta es su decodificacion en <strong>base " + baseAlfabeto + "</strong>: " + palabraDecodificada.join('');
                    document.querySelector("#listabinV").value = response.data['bin_chain']
                    document.getElementById('txtDecodificarVoltajes').innerHTML = palabraDecodificada.join('').slice(0, -1)
                })
                .catch(function(error) {
                    console.log(error);
                });

        } catch (error) {
            alert("Hubo un inconveniente: " + error);
            resultado.innerHTML = "";
            console.log("Error: ", error);
        };
    });
});