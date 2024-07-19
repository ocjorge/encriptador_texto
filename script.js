const entradaTexto = document.querySelector(".entrada-texto");
const salidaTexto = document.querySelector(".salida-texto");
const seccionTexto1 = document.querySelector(".texto1");
const seccionTexto2 = document.querySelector(".texto2");
const btnCopiar = document.querySelector(".copiar");

function validar(textoValidar) {
    const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    let conteo = 0;

    for (let posicion = 0; posicion < textoValidar.length; posicion++) {
        if (letras.includes(textoValidar[posicion])) {
            conteo++;
        }
    }

    if (conteo === textoValidar.length) {
        return true;
    }
    return false;
}

function encriptar() {
    const texto = entradaTexto.value.toLowerCase();
    let salida = "";

    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "e") {
            salida += "enter";
        } else if (texto[i] === "i") {
            salida += "imes";
        } else if (texto[i] === "a") {
            salida += "ai";
        } else if (texto[i] === "o") {
            salida += "ober";
        } else if (texto[i] === "u") {
            salida += "ufat";
        } else {
            salida += texto[i];
        }
    }

    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultarMensaje();
    mostrarCopiar();
}

function desencriptar() {
    const texto = entradaTexto.value.toLowerCase();
    let salida = "";

    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
            salida += "e";
            i += 4;
        } else if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
            salida += "i";
            i += 3;
        } else if (texto[i] === "a" && texto[i + 1] === "i") {
            salida += "a";
            i += 1;
        } else if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
            salida += "o";
            i += 3;
        } else if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
            salida += "u";
            i += 3;
        } else {
            salida += texto[i];
        }
    }

    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultarMensaje();
    mostrarCopiar();
}

function ocultarMensaje() {
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
}

function mostrarMensaje() {
    seccionTexto1.style.display = "block";
    seccionTexto2.style.display = "block";
}

function mostrarCopiar() {
    btnCopiar.style.display = "inline-block";
}

function copiar() {
    navigator.clipboard.writeText(salidaTexto.value);

    const anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";

    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrarMensaje();
    }, 2000);
}

entradaTexto.addEventListener("input", () => {
    if (entradaTexto.value.trim().length === 0) {
        mostrarMensaje();
    } else {
        ocultarMensaje();
    }
});
