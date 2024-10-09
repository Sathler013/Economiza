// Função principal para calcular o orçamento
function calcularOrcamento() {
    const renda = parseFloat(document.getElementById('renda').value);
    const despesas = parseFloat(document.getElementById('despesas').value);

    // Validação de entrada
    if (!validarEntrada(renda, despesas)) return;

    // Cálculo do orçamento
    const resultado = renda - despesas;
    exibirResultado(resultado);
}

// Função para validar a entrada
function validarEntrada(renda, despesas) {
    if (isNaN(renda) || isNaN(despesas) || renda < 0 || despesas < 0) {
        alert("Por favor, insira valores válidos e positivos para renda e despesas.");
        return false;
    }
    return true;
}

// Função para exibir o resultado com mensagem apropriada
function exibirResultado(resultado) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.style.color = resultado >= 0 ? 'green' : 'red'; // Mudança de cor para indicar positivo ou negativo

    if (resultado > 0) {
        resultadoElement.innerText = `Você tem um saldo positivo de R$ ${resultado.toFixed(2)}. Continue economizando!`;
    } else if (resultado < 0) {
        resultadoElement.innerText = `Você está no negativo em R$ ${Math.abs(resultado).toFixed(2)}. Reveja suas despesas.`;
    } else {
        resultadoElement.innerText = `Seu orçamento está equilibrado.`;
    }
}
