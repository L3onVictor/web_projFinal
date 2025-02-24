document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    setTimeout(function() {
        popup.style.display = "block";
    }, 3000);

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
