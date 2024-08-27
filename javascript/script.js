// OLÁ, PENSANDO EM AJUDAR A COMUNIDADE DE ESTUDOS ADICIONEI COMENTARIOS DE APOIO PARA QUEM NÃO CONSEGUE OU PRECISA DE AJUDA COM A PARTE DE JAVASCRIPT

/**
    Esta variável é do bloco onde aparecerá a mensagem criptografada ou descriptografada após clicar no botão Criptografar/Descriptografar, você pode conferir no index.html.
 */
let containerAreaMessage = document.getElementById('container__area_message')

/**
 * Está é uma função que apenas muda o conteúdo do bloco esquerdo (onde tem a foto).
 * @param {string} text O parâmetro `text` é a mensagem já criptografada ou descriptografada, essa função só faz a troca de conteúdo através do innerHTML.
 */
function changeText(text) {
    
    // CÓDIGO ABAIXO APENAS IRÁ SUBSTITUIR O HTML PADRÃO QUE ESTÁ DENTRO DA container___area_message LÁ NO index.html.
    containerAreaMessage.innerHTML = `<textarea id="message_area" readonly></textarea><button class="btn" id="copy" onclick="copy()">Copiar</button>`

    // CÓDIGO ABAIXO APENAS IRÁ INSERIR O TEXTO CRIPTOGRAFADO OU DESCRIPTGRAFADO NA AREA DE TEXTO
    document.getElementById('message_area').innerText = text
}
/**
 *  Função para CRIPTOGRAFAR.
 */
function code() {
    /**
     * Essa é a `textarea` onde escrevemos um texto, dentro dessa função só iremos usala para criptografar.
     */
    let text = document.getElementById('write_area')

    /*
    Neste `if` fazemos uma verificação simples, apenas para não permitir que o usuário cilque em criptografar sem nenhum texto escrito no campo.
    */
    if (text.value.trim() === '') {
        alert('Digite um texto para criptografar!')
    } else {
        /*
        Aqui fazemos a criptografia de fato
        */
        text = text.value.toLowerCase().replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')
        changeText(text)
    }
}

function decode() {
    /**
     * Essa é a `textarea` onde escrevemos um texto, dentro dessa função só iremos usala para descriptografar.
     */
    let text = document.getElementById('write_area')
    
    /*
    Neste `if` fazemos uma verificação simples, apenas para não permitir que o usuário cilque em descriptografar sem nenhum texto escrito no campo.
    */
    if (text.value.trim() === '') {
        alert('Digite um texto para descriptografar!')
    } else {
        /*
        Aqui fazemos a descriptografia de fato
        */
        text = text.value.toLowerCase().replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')
        changeText(text)
    }
}
/**
 * Função para o botão Copiar, onde tudo o que ele faz é colocar o texto escrito no bloco onde aparece a mensagem criptografada ou descriptografada para a sua aréa de transferência (funciona em celulares também).
 */
function copy() {
    navigator.clipboard.writeText(document.getElementById('message_area').value)

    // CÓDIGO ABAIXO APENAS PARA FINS ESTÉTICOS

    /**
     * Váriavél para o botão Copiar.
     */
    let copy = document.getElementById('copy')


    // Sempre que clicar no botão COPIAR ele irá trocar o texto do botão para COPIADO.
    copy.innerHTML = 'Copiado'
    
    // Quando retirar o mouse de cima do botão ele volta a ter o texto escrito como COPIAR.
    copy.addEventListener('mouseleave', ()=>{
        copy.innerText = 'Copiar'
    })
}