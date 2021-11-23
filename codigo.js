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
                    
window.addEventListener('load', () => {
    var selector = document.querySelector("#selector");
    var selector2 = document.querySelector("#selectorTexto2");
    var btnCalcula = document.querySelector("#hazlo");
    var btnReCalcula = document.querySelector("#hazlo2");
    var inputPalabra = document.querySelector("#listap");
    var baseAlfabeto = 32;
    var baseAlfabeto2 = 32;
    let listaSimbolos2 = [];
 
    
    selector.addEventListener('change', function () {
        baseAlfabeto = parseInt(document.querySelector("#selector").value);
    });

    selector2.addEventListener('change', function () {
        baseAlfabeto2 = parseInt(document.querySelector("#selector").value);
    });

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
    
    function codificacion(listaSimbolos) {
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

    btnCalcula.addEventListener('click', function () {
        
        let palabraEntrada = inputPalabra.value;
        let listaSimbolos = [];
        var resultadoLista = [];
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



     
    

}
);