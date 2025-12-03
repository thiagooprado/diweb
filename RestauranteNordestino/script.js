function abrirModal() {
    document.getElementById('carrinho-modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('carrinho-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const btnsAdicionar = document.querySelectorAll('.btn-adicionar');

    btnsAdicionar.forEach(btn => {
        btn.addEventListener('click', () => {
            abrirModal();
        });
    });

    const modal = document.getElementById('carrinho-modal');
    window.onclick = function(event) {
        if (event.target == modal) {
            fecharModal();
        }
    }
});S