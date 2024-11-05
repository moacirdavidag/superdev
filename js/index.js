const btnJogar = document.getElementById('btn-jogar');
const containers = document.querySelectorAll('.container');

const somJogar = new Audio('/assets/sounds/jogar.wav');
const somVoceEEspecial = new Audio('/assets/sounds/voce_e_especial_aline_barros.mp3');

function esconderTodos() {
    containers.forEach(container => {
        container.style.display = 'none';
    });
}

function mostrarFase(faseId) {
    const faseContainer = document.getElementById(faseId);
    if (faseContainer) {
        faseContainer.style.display = 'flex';
    }
}

btnJogar.addEventListener('click', () => {
    somJogar.play();
    esconderTodos();
    somVoceEEspecial.loop = true; 
    somVoceEEspecial.play();
    mostrarFase('primeira-fase'); 
});

document.getElementById('fase-1-correto').addEventListener('click', () => {
    esconderTodos();
    mostrarFase('segunda-fase');
});

document.getElementById('fase-2-correto').addEventListener('click', () => {
    esconderTodos();
    mostrarFase('terceira-fase');
});

document.getElementById('fase-3-correto').addEventListener('click', () => {
    esconderTodos();
    mostrarFase('quarta-fase');
});

document.getElementById('fase-4-correto').addEventListener('click', () => {
    esconderTodos();
    mostrarFase('quinta-fase');
});
