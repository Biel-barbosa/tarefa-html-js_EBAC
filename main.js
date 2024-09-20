function validarFormulario(e) {
    e.preventDefault(); // Evita o envio do formulário
    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
        alert('Sucesso! O número B é maior que o número A.');
        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    } else {
        alert('Erro! O número B deve ser maior que o número A.');
    }
}