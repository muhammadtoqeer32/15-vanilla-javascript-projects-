let currentIndex = 0;
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const translateValue = -currentIndex * 100 + '%';
        slides.style.transform = `translateX(${translateValue})`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }