const bestseller = document.getElementsByClassName('bestseller');

for(let i = 0 ; i < bestseller.length ; i ++) {
    const bestImg = bestseller[i].querySelector('.best-img>img')

    const colorPick = bestseller[i].getElementsByClassName('color-pick')

    for(let j = 0 ; j <colorPick.length; j++){
        colorPick[j].addEventListener('click',()=>{
            bestImg.setAttribute('src',`../img/베셀/${colorPick[j].dataset.src}.png`)
        })
        try {
            colorPick[j].style.backgroundColor = colorPick[j].dataset.color
        }catch(e) {
            console.log(e)
        }
    }
}
