const textoInput = document.getElementById('texto-input');
const resultado = document.getElementById('resultado');
const criptografarBtn = document.getElementById('criptografar');
const descriptografarBtn = document.getElementById('descriptografar');
const copiarBtn = document.getElementById('copiar');

function criptografar(texto) {
    if (!/^[a-z\s]*$/.test(texto)) {
        return 'Por favor, insira apenas letras minúsculas e espaços.';
    }
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}


function descriptografar(texto) {
    if (!/^[a-z\s]*$/.test(texto)) {
        return 'Por favor, insira apenas letras minúsculas e espaços.';
    }
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

criptografarBtn.addEventListener('click', () => {
    const texto = textoInput.value;
    const resultadoCripto = criptografar(texto);
    resultado.value = resultadoCripto;
    resultado.style.backgroundColor = resultadoCripto.includes('Por favor') ? '#ffebee' : '#ffffff';
});

descriptografarBtn.addEventListener('click', () => {
    const texto = textoInput.value;
    const resultadoDescripto = descriptografar(texto);
    resultado.value = resultadoDescripto;
    resultado.style.backgroundColor = resultadoDescripto.includes('Por favor') ? '#ffebee' : '#ffffff';
});

copiarBtn.addEventListener('click', () => {
    const textoParaCopiar = resultado.value;
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert('Texto copiado para a área de transferência!');
        })
        .catch(err => {
            alert('Erro ao copiar o texto.');
        });
});
