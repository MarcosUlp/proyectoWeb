//CARROUSEL
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'image/img1.jpg',
        './image/img2.webp',
        'image/img3.jpeg'

    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');


    function updateImage(newIndex) {

        carouselImage.classList.remove('active');

        setTimeout(() => {
            currentIndex = newIndex;
            carouselImage.src = images[currentIndex];
            carouselImage.classList.add('active');
        }, 800); 
    }

    document.getElementById('next').addEventListener('click', function() {
        const nextIndex = (currentIndex + 1) % images.length;
        updateImage(nextIndex);
    });

    document.getElementById('prev').addEventListener('click', function() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(prevIndex);
    });
    setTimeout(() => {
        carouselImage.src = images[currentIndex];
        carouselImage.classList.add('active');
    }, 100);
});

//FORMULARIO INICIO
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let hasError = false;


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación del nombre
    if (name === '') {
        alert('El nombre es obligatorio.');
        hasError = true;
    }

    // Validación del email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Introduce un correo electrónico válido.');
        hasError = true;
    }

    // Validación del teléfono
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('El número de teléfono debe tener 10 dígitos.');
        hasError = true;
    }

    // Validación del mensaje
    if (message === '') {
        alert('El mensaje es obligatorio.');
        hasError = true;
    }

    // Si no hay errores, mostrar un mensaje de éxito
    if (!hasError) {
        alert('Formulario enviado con éxito');
    }
});