// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active'); // Close menu on link click (mobile)
    });
});

// Testimonials Animation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 4000); // Change testimonial every 4 seconds

// Adventure Package cards

const packageCard = document.querySelectorAll('.package-card');

packageCard.forEach((card) => {
    card.addEventListener('click', () => {
        removeCurrentActives()
        card.classList.add('active')
    });
});

function removeCurrentActives() {
    packageCard.forEach((card) => {
        card.classList.remove('active');
    });
}

// Gallery Images Scroll

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const itemsPerPage = 3;  // Number of items to display per page
    const totalItems = galleryItems.length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalItems - itemsPerPage;
        } else if (index > totalItems - itemsPerPage) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * (100 / itemsPerPage);
        gallery.style.transform = `translateX(${offset}%)`;
    }

    leftArrow.addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });

    rightArrow.addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });
});