document.addEventListener("DOMContentLoaded", function () {
    const carouselsAuto = document.querySelectorAll(".produtos-carrossel-auto");

    carouselsAuto.forEach(carousel => {
        let scrollAmount = 0;
        const step = 500; // Ajuste o valor do step
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        function scrollCarousel() {
            if (scrollAmount < maxScroll) {
                scrollAmount += step;
            } else {
                scrollAmount = 0;
            }
            console.log('scrollAmount:', scrollAmount); // Debugging
            console.log('maxScroll:', maxScroll); // Debugging
            carousel.scrollLeft = scrollAmount;
        }

        setInterval(scrollCarousel, 9000);
    });
});


// // Carrosséis com botões de navegação
// const carouselsManual = document.querySelectorAll(".produtos-carrossel-manual");

// carouselsManual.forEach(carousel => {
//     const scrollLeftButton = carousel.querySelector(".prev-btn");
//     const scrollRightButton = carousel.querySelector(".next-btn");

//     if (scrollLeftButton) {
//         scrollLeftButton.addEventListener("click", function () {
//             carousel.scrollBy({ left: -300, behavior: "smooth" }); // Move para a esquerda
//         });
//     }

//     if (scrollRightButton) {
//         scrollRightButton.addEventListener("click", function () {
//             carousel.scrollBy({ left: 300, behavior: "smooth" }); // Move para a direita
//         });
//     }
// });
