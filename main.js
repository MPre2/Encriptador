//Ingresa la frase y la encripta
function encriptar() {

    var text = document.getElementById("texto").value;
    text = text.replace(/e/gi, "enter");
    text = text.replace(/i/gi, "imes");
    text = text.replace(/a/gi, "ai");
    text = text.replace(/o/gi, "ober");
    text = text.replace(/u/gi, "ufat");
    document.getElementById("textout").value = text;
    document.getElementById("text").value = "";                
}

//ingresa la frase y la desencripta
function desencriptar() {

    var text = document.getElementById("texto").value;
    text = text.replace(/enter/gi, "e");
    text = text.replace(/imes/gi, "i");
    text = text.replace(/ai/gi, "a");
    text = text.replace(/ober/gi, "o");
    text = text.replace(/ufat/gi, "u");
    document.getElementById("textout").value = text;
    
}

//Copia el contenido del cuadro de salida
function copiar() {

    navigator.clipboard.writeText(document.getElementById("textout").value);  
    document.getElementById("textout").value = "";
}