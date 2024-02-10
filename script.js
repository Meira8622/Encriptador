
let encriptar = document.querySelector(".encriptar");

let desencriptar = document.querySelector(".desencriptar");

let textarea = document.querySelector(".text-input");

let copiar = document.querySelector(".copiar");

encriptar.addEventListener("click", function() { 
    encrypt();
});

desencriptar.addEventListener("click", function() {
    deencrypt();
});

copiar.addEventListener("click", function() {
    copyContent();
});

function encrypt() {
    let contenido = [...textarea.value];
    let resultado = "";
    
    let outputbox = document.querySelector(".text-output");

    let img = document.querySelector(".secondary-block-img");
    let msg = document.querySelector(".msg-container");
    let button = document.querySelector(".copiar");

    for(let i=0; i<contenido.length; i++) {

        switch(contenido[i]) {
            case "a": 
                resultado+="ai" ;
                break;
            case "e": 
                resultado+="enter";
                break;
            case "i": 
                resultado+="imes";
                break;
            case "o": 
                resultado+="ober";
                break;
            case "u": 
                resultado+="ufat";
                break; 
            default:
                resultado+=contenido[i];
                break;
        }

        img.style.display = "none";
        msg.style.display = "none";
        outputbox.style.display = "inline-block";
        button.style.display = "inline-block";

        outputbox.innerHTML = resultado;

        // La letra "e" es convertida para "enter"
        // La letra "i" es convertida para "imes"
        // La letra "a" es convertida para "ai"
        // La letra "o" es convertida para "ober"
        // La letra "u" es convertida para "ufat"

    }

    console.log("encrypt");
    console.log(contenido);
    console.log(resultado);
}

function deencrypt() {
    let contenido = [...textarea.value];
    let resultado = "";
    
    let outputbox = document.querySelector(".text-output");

    let img = document.querySelector(".secondary-block-img");
    let msg = document.querySelector(".msg-container");
    let button = document.querySelector(".copiar");

    for(let i=0; i<contenido.length; i++) {

        switch(contenido[i]) {
            case "a": 
                if(contenido[i+1]=="i") {
                    resultado+="a";
                    i+=1;
                } else resultado+=contenido[i];
                break;
            case "e": 
                if (contenido[i+1]=="n" &&
                    contenido[i+2]=="t" &&
                    contenido[i+3]=="e" &&
                    contenido[i+4]=="r") {
                    resultado += "e";
                    i+=4;
                } else resultado+=contenido[i];
                break;
            case "i": 
                if (contenido[i+1]=="m" &&
                    contenido[i+2]=="e" &&
                    contenido[i+3]=="s") {
                    resultado += "i";
                    i+=3;
                } else resultado+=contenido[i];
                break;
            case "o": 
                if (contenido[i+1]=="b" &&
                    contenido[i+2]=="e" &&
                    contenido[i+3]=="r") {
                    resultado += "o";
                    i+=3;
                } else resultado+=contenido[i];
                break;
            case "u": 
                if (contenido[i+1]=="f" &&
                    contenido[i+2]=="a" &&
                    contenido[i+3]=="t") {
                    resultado += "u";
                    i+=3;
                } else resultado+=contenido[i];
                break; 
            default:
                resultado+=contenido[i];
                break;
        }

        img.style.display = "none";
        msg.style.display = "none";
        outputbox.style.display = "inline-block";
        button.style.display = "inline-block";

        outputbox.innerHTML = resultado;

        // La letra "enter" es convertida para "e"
        // La letra "imes" es convertida para "i"
        // La letra "ai" es convertida para "a"
        // La letra "ober" es convertida para "o"
        // La letra "ufat" es convertida para "u"

    }

    console.log("deecrypt");
    console.log(contenido);
    console.log(resultado);
}

function copyContent() {
    let outputbox = document.querySelector(".text-output").innerText;

    navigator.clipboard.writeText(outputbox);
}