// document.addEventListener('DOMContentLoaded', function() {
//     const prevBtn = document.querySelector('.prev');
//     const nextBtn = document.querySelector('.next');
//     const slides = document.querySelector('.viva-carousel');
//     const slideCount = document.querySelectorAll('.slide').length;

//     let slideIndex = 0;

//     // 다음 버튼 클릭 시
//     nextBtn.addEventListener('click', function() {
//         slideIndex++;
//         if (slideIndex >= slideCount) {
//             slideIndex = 0;
//         }
//         updateSlide();
//     });

//     // 이전 버튼 클릭 시
//     prevBtn.addEventListener('click', function() {
//         slideIndex--;
//         if (slideIndex < 0) {
//             slideIndex = slideCount - 1;
//         }
//         updateSlide();
//     });

//     function updateSlide() {
//         const slideWidth = slides.clientWidth;
//         slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//     }
// });

const viva = document.querySelector('.viva-slide')
let currentIndex = 0;
const slideWidth = 10;        
const totalSlides = viva.children.length;
const visibleSlides = 4; 

function showSlide(index) {
    if (index >= totalSlides - visibleSlides + 1) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - visibleSlildes;
    } else {
        currentIndex = index;
    }
    viva.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
showSlide(currentIndex + 1);
});