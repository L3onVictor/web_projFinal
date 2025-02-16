document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".produtos");
    carousels.forEach(carousel => {
        let scrollAmount = 0;
        const step = 250;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        function scrollCarousel() {
            if (scrollAmount < maxScroll) {
                scrollAmount += step;
            } else {
                scrollAmount = 0;
            }
            carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
        
        setInterval(scrollCarousel, 5000);
    });
});
