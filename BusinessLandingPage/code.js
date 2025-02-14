document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

const testimonials = document.querySelectorAll('.testimonials blockquote');
let index = 0;

function showTestimonial() {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
    index = (index + 1) % testimonials.length;
}

showTestimonial();
setInterval(showTestimonial, 3000);

document.querySelectorAll('.menu-items .item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You selected: ${item.querySelector('h3').innerText}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
