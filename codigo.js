'use-strict'
const alfabeto32 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
                    "U", "V", "W", "X", "Y", "Z", "2", "3", "4", "5", 
                    "6", "7"];

const alfabeto64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", 
                    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                    "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
                    "8", "9", "+", "/"];

const alfabeto128 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                     "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                     "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", 
                     "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                     "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                     "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
                     "8", "9", "+", "/", " ", "á", "é", "í", "ó", "ú", 
                     "Á", "É", "Í", "Ó", "Ú", "!", "\u0022", "#", "$", "%", 
                     "&", "'", "(", ")", "*", ",", "-", ".", "\"",":", 
                     ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", 
                     "`", "{", "|", "}", "~", "¡", "¢", "£", "¤", "¥",
                     "¦", "’", "¨", "©", "ª", "«", "¬", "®", "¯", "°",
                     "±", "²", "³", "´", "µ", "¶", "·", "¸"];

const alfabeto256 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                     "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                     "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", 
                     "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                     "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                     "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
                     "8", "9", "+", "/", " ", "á", "é", "í", "ó", "ú", 
                     "Á", "É", "Í", "Ó", "Ú", "!", "\u0022", "#", "$", "%", 
                     "&", "'", "(", ")", "*", ",", "-", ".", "\"",":", 
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
                     "Ń", "ń", "Ņ", "ņ", "Ň", "ň"];

var baseAlfabeto = 32;
var baseAlfabeto2 = 32;
let baseIMG = 64;
var resultadoLista = [];
let listaSimbolos2 = [];
let decodeIMG;
let encodeIMG;

const metodo_Img = () => {
    document.getElementById("file").onchange = function (e) {
      // Creamos el objeto de la clase FileReader
      let reader = new FileReader();
  
      // Leemos el archivo subido y se lo pasamos a nuestro fileReader
      reader.readAsDataURL(e.target.files[0]);
  
      // Le decimos que cuando este listo ejecute el código interno
      reader.onload =  () => {
        let preview = document.getElementById('preview'), image = document.createElement('img');

        image.src = reader.result;  
        cadena = reader.result;
        const myArray = cadena.split("base64,");

        // console.log(myArray[1]);  
        preview.innerHTML = '';
        preview.append(image);
        encodeIMG = encode( myArray[1] )
        decodeIMG = decode( encodeIMG );

        // decode( encodeIMG );
        // baseIMG = 64;
        // decodeIMG = decode( encodeIMG );

        console.log( decodeIMG.join('') ); 
        
        document.querySelector('#txtArea').value = decodeIMG.join('');
        
        // <img src='data:image/png;base64, (base64) '/>
        // return myArray[1];
    };
    
}
}


// FUNCION QUE CODIFICA

const encode = ( palabraEntrada ) => {
    console.log(palabraEntrada);
    if (listaSimbolos2.length == 0) {
        listaSimbolos = palabraEntrada.match(/.{1}/g);
    } else {
        listaSimbolos = listaSimbolos2.concat();
        listaSimbolos2 = [];
    };
    try {
        let  { listaPalabras } = codificacion(listaSimbolos);
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
        console.log('Datos enviados a decodificación:', baseIMG, cadenaBin);
        let palabraDecodificada = decodificacion( baseIMG, cadenaBin );
        console.log('palabra decodificada', palabraDecodificada);
        return palabraDecodificada;
    } catch (error) {
        console.log("Error: ", error);
    };
}

const imgShow = () =>{
    let imgPreview = document.getElementById('preview-img'), image2 = document.createElement('img');
    image2.src =  `data:image/png;base64,${ decodeIMG.join('') }`
    console.log( image2.src );
    // <img src='data:image/png;base64, (base64) '/>
    imgPreview.innerHTML = '';
    imgPreview.append( image2 );
}

// SE SELECCIONA EL ALFABETO

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


// FUNCION QUE CODIFICA

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


// FUNCION QUE DECODIFICA

const decodificacion = ( baseAlfabeto2, binarioEntrada ) => {

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


window.addEventListener('load', () => {
    // Valores a revisar
    var selector = document.querySelector("#selectorTexto1");
    var selector2 = document.querySelector("#selectorTexto2");

// --------------------------------------

    var btnCalcula = document.querySelector("#hazlo");
    var btnReCalcula = document.querySelector("#hazlo2");
    var btnImagen = document.querySelector("#hazlo3");
    var inputPalabra = document.querySelector("#listap");
    var outputPalabra = document.querySelector("#txtDecodificado");
    metodo_Img();

    btnImagen.addEventListener('click', () =>{
        try {
            document.querySelector('#txtArea').value != ''
            ? imgShow()
            : alert('No se ha codificaco la imagen');
        } catch (error) {
            throw error;
        }
    })

    
    selector.addEventListener('change',  () => {
        baseAlfabeto = parseInt(document.querySelector("#selectorTexto1").value);
    });


    btnCalcula.addEventListener('click',  () => {
        
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
            let { listaPalabras} = codificacion(listaSimbolos);
            for (let binario of listaPalabras) {
                resultadoLista.innerHTML += "<li>" + binario.simbolo + " : " + binario.binario + " </li>";
            };
            resultado.innerHTML = "<br>";
            let cadenaBin = listaPalabras.map(palabra => palabra.binario).toString().split(',').join('')
            document.querySelector("#listabin").value = cadenaBin
            resultado.innerHTML = "<br>";
        } catch (error) {
            alert("Hubo un inconveniente: " + error);
            resultado.innerHTML = "";
            console.log("Error: ", error);
        };
    });


    selector2.addEventListener('change', function () {
        baseAlfabeto2 = parseInt(document.querySelector("#selectorTexto2").value);
    });



    btnReCalcula.addEventListener('click', function () {
        let binarioEntrada = document.querySelector("#listabin").value;
        try {
            let palabraDecodificada = decodificacion( baseAlfabeto2, binarioEntrada );
            resultadoLista.innerHTML = "";
            resultadoLista.innerHTML += "Esta es su decodificacion en <strong>base " + baseAlfabeto + "</strong>: " + palabraDecodificada.join('');
            outputPalabra.value = palabraDecodificada.join('')
        } catch (error) {
            alert("Hubo un inconveniente: " + error);
            resultado.innerHTML = "";
            console.log("Error: ", error);
        };
    });


}
);



