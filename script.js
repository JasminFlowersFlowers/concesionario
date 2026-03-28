// Efecto visual al hacer clic en la tarjeta
const cards = document.querySelectorAll('.car-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.1)';
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
        }, 300);
    });
});