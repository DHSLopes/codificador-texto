let mensagens = document.getElementById('container__direito__texto');

function criptografar(){
    let textoDigitado = document.getElementById('txtTextoDigitado').value;
    textoDigitado = textoDigitado.toLowerCase();
    textoDigitado = textoDigitado.replace(/e/g, "enter");
    textoDigitado = textoDigitado.replace(/i/g, "imes");
    textoDigitado = textoDigitado.replace(/a/g, "ai");
    textoDigitado = textoDigitado.replace(/o/g, "ober");
    textoDigitado = textoDigitado.replace(/u/g, "ufat");
    manipulaImagem();
    manipulaMensagens();
}

function descriptografar(){
    let textoDigitado = document.getElementById('txtTextoDigitado').value;
    textoDigitado = textoDigitado.toLowerCase();
    textoDigitado = textoDigitado.replace(/enter/g, "e");
    textoDigitado = textoDigitado.replace(/imes/g, "i");
    textoDigitado = textoDigitado.replace(/ai/g, "a");
    textoDigitado = textoDigitado.replace(/ober/g, "o");
    textoDigitado = textoDigitado.replace(/ufat/g, "u");
    mensagens.removeAttribute = "hidden";
    manipulaImagem();
    manipulaMensagens();
}

function manipulaImagem(){
    let imagem = document.getElementById('container__direito__imagem').style;
    console.log(imagem + " --------");
    if(imagem.style.display == 'none'){
        imagem.style.display = 'block';
    }
    else{
        imagem.style.display = 'none';
    }
}

function manipulaMensagens(){
    let mensagem = document.getElementById('container__direito__texto');
    if(mensagem.style.display == 'none'){
        mensagem.style.display = 'block';
    }
    else{
        mensagem.style.display = 'none';
    }
}