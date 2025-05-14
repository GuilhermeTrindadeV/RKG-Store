document.addEventListener('DOMContentLoaded', function () {
    // Pega os elementos do DOM
    const track = document.getElementById('carousel-track'); // Faixa que desliza
    const nextBtn = document.getElementById('nextBtn');      // Botão "próximo"
    const prevBtn = document.getElementById('prevBtn');      // Botão "anterior"

    let position = 0;            // Controla a posição atual
    const cardWidth = 220;      // Largura de cada card + margem (ajuste conforme seu layout)
    const maxScroll = track.scrollWidth - track.clientWidth; // Limite máximo de scroll

    // Avança para o próximo grupo de cards
    nextBtn.addEventListener('click', () => {
        if (position < maxScroll) {
            position += cardWidth;
            if (position > maxScroll) position = maxScroll;
            track.style.transform = `translateX(-${position}px)`;
        }
    });

    // Volta para o grupo anterior de cards
    prevBtn.addEventListener('click', () => {
        if (position > 0) {
            position -= cardWidth;
            if (position < 0) position = 0;
            track.style.transform = `translateX(-${position}px)`;
        }
    });
});