// ==========================================
// 🎮 SISTEMA DO QUIZ INTERATIVO
// ==========================================
let etapaAtual = 1;
const totalEtapas = document.querySelectorAll('.quiz-step').length;
let pontuacao = 0;

const botoesOpcoes = document.querySelectorAll('.quiz-option');

botoesOpcoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Verifica se a resposta está certa
        const acertou = this.getAttribute('data-correct') === 'true';
        if (acertou) { pontuacao++; }

        // Remove a etapa atual da tela
        document.querySelector(`[data-step="${etapaAtual}"]`).classList.remove('active');
        etapaAtual++;

        // Avança ou exibe o resultado final
        if (etapaAtual <= totalEtapas) {
            document.querySelector(`[data-step="${etapaAtual}"]`).classList.add('active');
        } else {
            mostrarResultado();
        }
    });
});

function mostrarResultado() {
    document.getElementById('quiz').classList.add('hidden');
    const containerResultado = document.getElementById('quiz-result');
    containerResultado.classList.remove('hidden');
    
    const textoResultado = document.getElementById('result-text');
    if (pontuacao === totalEtapas) {
        textoResultado.innerText = `Gênio da Web! Você acertou ${pontuacao} de ${totalEtapas}. Continua assim, espalhando boa vibe na internet! 🚀🔥`;
    } else {
        textoResultado.innerText = `Você acertou ${pontuacao} de ${totalEtapas}. Vale a pena rever suas atitudes para não vacilar nas redes! 🎮🔒`;
    }
}

function restartQuiz() {
    etapaAtual = 1;
    pontuacao = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.querySelector(`[data-step="1"]`).classList.add('active');
}

// ==========================================
// 👁️ CONTADOR DE VISITANTES INTELIGENTE
// ==========================================
function gerenciarContador() {
    let visitas = localStorage.getItem('contagemVisitantes');
    
    if (!visitas) {
        // Se for o primeiro acesso nesse navegador, inicia com um número base alto simulado
        visitas = Math.floor(Math.random() * 340) + 110;
    } else {
        // Incrementa um novo acesso
        visitas = parseInt(visitas) + 1;
    }
    
    localStorage.setItem('contagemVisitantes', visitas);
    document.getElementById('visitor-count').innerText = visitas;
}

// Dispara o contador assim que a página carrega completamente
window.onload = gerenciarContador;