// JavaScript to toggle the hamburger menu and the active class
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    // Toggle the active class for the nav links and hamburger
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});


