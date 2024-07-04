function criptografarTexto() {
    let textoDigitado = document.getElementById('txtTextoDigitado').value;
    textoDigitado = textoDigitado.toLowerCase();
    textoDigitado = textoDigitado.replace(/e/g, "enter");
    textoDigitado = textoDigitado.replace(/i/g, "imes");
    textoDigitado = textoDigitado.replace(/a/g, "ai");
    textoDigitado = textoDigitado.replace(/o/g, "ober");
    textoDigitado = textoDigitado.replace(/u/g, "ufat");
    manipulaImagem();
    manipulaMensagens(textoDigitado);
}

function descriptografarTexto() {
    let textoDigitado = document.getElementById('txtTextoDigitado').value;
    textoDigitado = textoDigitado.toLowerCase();
    textoDigitado = textoDigitado.replace(/enter/g, "e");
    textoDigitado = textoDigitado.replace(/imes/g, "i");
    textoDigitado = textoDigitado.replace(/ai/g, "a");
    textoDigitado = textoDigitado.replace(/ober/g, "o");
    textoDigitado = textoDigitado.replace(/ufat/g, "u");
    manipulaImagem();
    manipulaMensagens(textoDigitado);
}

function copiarTexto(){
    let textoParaCopiar = document.getElementById('txtTextoGerado').value;
    let span = document.getElementById('spanCopiadoComSucesso');
    navigator.clipboard.writeText(textoParaCopiar);
    span.style.display = 'block';
    setTimeout(function() {
        span.style.display = 'none';
    }, 3000);
}

function manipulaImagem() {
    let imagem = document.getElementById('imgImagem');
    if(imagem.style.display == 'none'){
        imagem.style.display = 'block';
    }
    else{
        imagem.style.display = 'none';
    }
}

function manipulaMensagens(msg) {
    let texto = document.getElementById('txtTextoGerado');
    let nenhuma = document.getElementById('pNenhumaMensagem');
    let botaoCopiar = document.getElementById('btnCopiar');
    if(texto.style.display == 'none'){
        texto.style.display = 'block';
        texto.value += msg + "\n";
        nenhuma.style.display = 'none';
        botaoCopiar.style.display = 'block';
    }
    else{
        texto.style.display = 'none';
        texto.value = "";
        nenhuma.style.display = 'block';
        botaoCopiar.style.display = 'none';
    }
}