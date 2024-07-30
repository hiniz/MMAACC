// 헤더이벤트
const header = document.querySelector('header');
let timeout;

window.addEventListener("scroll", () => {
    header.classList.add("hidden")

    clearTimeout(timeout);

    timeout = setTimeout(function(){
        header.classList.remove("hidden")
    }, 300)
});


// // 이미지무빙

// // 박스 요소를 가져옵니다.
// var boxContainer = document.querySelector('.moving-container');

// console.log(boxContainer)
// var box = boxContainer.querySelector('.new-glow-lip');

// // 스크롤 이벤트 리스너를 추가합니다.
// window.addEventListener('scroll', function() {
//     var boxPos = boxContainer.offsetTop;
//     var boxHeight = boxContainer.offsetHeight;
//     var topOfWindow = window.pageYOffset;

//     if (boxPos < topOfWindow + window.innerHeight && boxPos + boxHeight > topOfWindow) {
//         box.classList.add('box-visible');
//     } else {
//         box.classList.remove('box-visible');
//     }
// });






const contents = document.getElementsByClassName('viva-content')
const io = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0){
            entry.target.children[0].classList.add('active');
        }else {
            entry.target.children[0].classList.remove('active');
        }
    })
})
for (const content of contents){
    io.observe(content);
}




