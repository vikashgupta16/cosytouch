// Script to handle the mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector("header input[type='checkbox']");
    const navbar = document.querySelector("header .navbar");
    const menuLabel = document.querySelector("header label.fas");

    menuLabel.addEventListener("click", function() {
        menuToggle.checked = !menuToggle.checked;
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            menuToggle.checked = false;
        }
    });
});

// Scroll to sections smoothly
document.querySelectorAll("header .navbar a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });

        if (window.innerWidth <= 768) {
            menuToggle.checked = false;
        }
    });
});
