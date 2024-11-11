document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.photo-gallery img');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    const closeModal = document.createElement('span');

    // Configurações do modal
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    modalImg.style.maxWidth = '80%';
    modalImg.style.maxHeight = '80%';
    modal.appendChild(modalImg);

    closeModal.textContent = 'X';
    closeModal.style.position = 'absolute';
    closeModal.style.top = '20px';
    closeModal.style.right = '30px';
    closeModal.style.fontSize = '30px';
    closeModal.style.color = 'white';
    closeModal.style.cursor = 'pointer';
    modal.appendChild(closeModal);

    document.body.appendChild(modal);

    // Função para abrir o modal
    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    // Fechar o modal ao clicar no "X"
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modalImg) return;
        modal.style.display = 'none';
    });
});