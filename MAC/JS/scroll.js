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




