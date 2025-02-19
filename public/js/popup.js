document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    // Abrir popup automaticamente após 3 segundos
    setTimeout(function() {
        popup.style.display = "block";
    }, 3000);

    // Fechar popup ao clicar no "X"
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
