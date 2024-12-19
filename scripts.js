let counter = 0; // Contador para alternar entre X e O

// Função executada ao clicar em uma célula
function choice(cell) {
    // Verifica se a célula já está preenchida
    if (cell.textContent !== '') {
        alert('Célula já preenchida! Escolha outra.');
        return;
    }

    // Incrementa o contador
    counter++;

    // Adiciona X ou O dependendo se o contador é par ou ímpar
    if (counter % 2 === 0) {
        cell.textContent = 'O';
    } else {
        cell.textContent = 'X';
    }

    // Verifica se há um vencedor ou empate
    checkGameStatus();
}

// Função para verificar o status do jogo
function checkGameStatus() {
    const cells = document.querySelectorAll('.celula');
    const winPatterns = [
        [0, 1, 2], // Linha superior
        [3, 4, 5], // Linha do meio
        [6, 7, 8], // Linha inferior
        [0, 3, 6], // Coluna esquerda
        [1, 4, 7], // Coluna central
        [2, 5, 8], // Coluna direita
        [0, 4, 8], // Diagonal principal
        [2, 4, 6], // Diagonal secundária
    ];

    // Verifica padrões de vitória
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            showResult(`${cells[a].textContent} venceu!`);
            return;
        }
    }

    // Verifica empate
    if (counter === 9) {
        showResult('Empate!');
    }
}

// Função para mostrar o resultado
function showResult(message) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = message;
    disableBoard(); // Desativa o tabuleiro
}

// Função para desativar o tabuleiro
function disableBoard() {
    const cells = document.querySelectorAll('.celula');
    cells.forEach((cell) => {
        cell.style.pointerEvents = 'none'; // Impede novos cliques
    });
}

// Função para reiniciar o jogo
function resetGame() {
    const cells = document.querySelectorAll('.celula');
    cells.forEach((cell) => {
        cell.textContent = ''; // Limpa o texto das células
        cell.style.pointerEvents = 'auto'; // Reativa o tabuleiro
    });
    document.getElementById('result-message').textContent = ''; // Limpa a mensagem de resultado
    counter = 0; // Reseta o contador
}