function validaEntrada(){
    let mensagem = document.getElementById('txtTextoDigitado').value;
    for (var i = 0; i < mensagem.length; i++) {
        var charCode = mensagem.charCodeAt(i);
        console.log(mensagem[i])
        if ((charCode >= 33 && charCode <= 43) || /* CARACTERES ESPECIAIS, NUMEROS E LETRAS MAIÚSCULAS */
            (charCode == 45) || /* ESSA LINHA ADICIONA O HÍFEN, MAS REMOVE VÍRGULAS E PONTOS DO TESTE */
            (charCode >= 47 && charCode <= 96) || /* OUTROS CARACTERES ESPECIAIS, NÚMEROS E LETRAS MAIÚSCULAS */
            (charCode >= 123 && charCode <= 255)) {
                return false;
            }
    }
    return true;
}

function manipulaImagem() {
    let imagem = document.getElementById('imgImagem');
    if(imagem.style.display == 'flex'){
        imagem.style.display = 'none';
    }
}

function manipulaMensagens(msg) {
    let texto = document.getElementById('txtTextoGerado');
    let nenhuma = document.getElementById('pNenhumaMensagem');
    let botaoCopiar = document.getElementById('btnCopiar');
    if(texto.style.display == 'none'){
            texto.style.display = 'block';
            texto.value += msg;
            nenhuma.style.display = 'none';
            botaoCopiar.style.display = 'block';
    }
    else{
        texto.value = msg;
    }
}

function limpaMensagemGerada(){
    let texto = document.getElementById('txtTextoGerado');
    texto.value = "";
}

function limpaMensagem(){
    let texto = document.getElementById('txtTextoDigitado');
    texto.value = "";
}

function criptografarTexto() {
    if(validaEntrada()){
        limpaMensagemGerada();
        let textoDigitado = document.getElementById('txtTextoDigitado').value;
        textoDigitado = textoDigitado.replace(/e/g, "enter");
        textoDigitado = textoDigitado.replace(/i/g, "imes");
        textoDigitado = textoDigitado.replace(/a/g, "ai");
        textoDigitado = textoDigitado.replace(/o/g, "ober");
        textoDigitado = textoDigitado.replace(/u/g, "ufat");
        manipulaImagem();
        manipulaMensagens(textoDigitado);
        limpaMensagem();
    }
    else{
        alert('O texto não pode conter letras maiúsculas, números ou caracteres especiais.\nFavor, reescreva a mensagem!');
        limpaMensagem();
    }
}

function descriptografarTexto() {
    if(validaEntrada()){
        limpaMensagemGerada();
        let textoDigitado = document.getElementById('txtTextoDigitado').value;
        textoDigitado = textoDigitado.toLowerCase();
        textoDigitado = textoDigitado.replace(/enter/g, "e");
        textoDigitado = textoDigitado.replace(/imes/g, "i");
        textoDigitado = textoDigitado.replace(/ai/g, "a");
        textoDigitado = textoDigitado.replace(/ober/g, "o");
        textoDigitado = textoDigitado.replace(/ufat/g, "u");
        manipulaImagem();
        manipulaMensagens(textoDigitado);
        limpaMensagem();
    }
    else{
        alert('O texto não pode conter letras maiúsculas, números ou caracteres especiais.\nFavor, reescreva a mensagem!');
        limpaMensagem();
    }
}

function copiarTexto(){
    let textoParaCopiar = document.getElementById('txtTextoGerado').value;
    let span = document.getElementById('spanCopiadoComSucesso');
    navigator.clipboard.writeText(textoParaCopiar);
    limpaMensagemGerada();
    span.style.display = 'block';
    setTimeout(function() {
        span.style.display = 'none';
    }, 3000);
}
