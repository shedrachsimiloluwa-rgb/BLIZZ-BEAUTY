// PAGE LOADER

window.addEventListener("load", function() {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 800);

});


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-times");

    } else {

        icon.classList.remove("fa-times");

        icon.classList.add("fa-bars");

    }

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");

        icon.classList.add("fa-bars");

    });

});


// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .price-card, .intro-image, .intro-text, .gallery-grid img, .contact-item"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.12

});


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "all 0.8s ease";

    observer.observe(element);

});


const style = document.createElement("style");

style.innerHTML = `

.visible {

    opacity: 1 !important;

    transform: translateY(0) !important;

}

`;

document.head.appendChild(style);


// IMAGE LOADING FALLBACK

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", function() {

        this.style.background = "#ead4e9";

        this.style.minHeight = "150px";

    });

});