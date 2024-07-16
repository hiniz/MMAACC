document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelector('.viva-carousel');
    const slideCount = document.querySelectorAll('.slide').length;

    let slideIndex = 0;

    // 다음 버튼 클릭 시
    nextBtn.addEventListener('click', function() {
        slideIndex++;
        if (slideIndex >= slideCount) {
            slideIndex = 0;
        }
        updateSlide();
    });

    // 이전 버튼 클릭 시
    prevBtn.addEventListener('click', function() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slideCount - 1;
        }
        updateSlide();
    });

    function updateSlide() {
        const slideWidth = slides.clientWidth;
        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
});
