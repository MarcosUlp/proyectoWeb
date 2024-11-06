// CARROUSEL
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
