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