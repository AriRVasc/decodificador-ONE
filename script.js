// Função de criptografia
function cryptText() {
    const input = document.getElementById('inputText').value;
    if (!/^[a-z\s]*$/.test(input)) {
        alert('Por favor, insira apenas letras minúsculas e espaços.');
        return;
    }
    let output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = output;
}

// Função de descriptografia
function decryptText() {
    const input = document.getElementById('inputText').value;
    if (!/^[a-z\s]*$/.test(input)) {
        alert('Por favor, insira apenas letras minúsculas e espaços.');
        return;
    }
    let output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = output;
}

// Função para copiar o texto para a área de transferência
function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
