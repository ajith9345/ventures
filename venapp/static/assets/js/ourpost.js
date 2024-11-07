const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    const totalSlides = slides.length;
    const offset = -index * 100; // Move slides
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Show the first slide
showSlide(currentSlide);

// Next slide
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop to start
    showSlide(currentSlide);
});

// Previous slide
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to end
    showSlide(currentSlide);
});

// Automatic slide change
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds


// navigationbar......

document.querySelector('.toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('active');
});