// app.js

// Example: Toggle navigation menu on mobile devices
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Example: Highlight active navigation link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(otherLink => otherLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// Add more JavaScript functionality as needed
// For instance, form validation, sliders, etc.
