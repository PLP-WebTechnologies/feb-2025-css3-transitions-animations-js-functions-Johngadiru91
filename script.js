// Image Slider
const slides = document.querySelectorAll('.slides img');
if (slides.length > 0) {
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Form Validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            formMessage.textContent = 'Form submitted successfully!';
            formMessage.style.color = 'green';
            form.reset();
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
        }
    });
}