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

document.addEventListener('DOMContentLoaded', function(){
    const tapButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content')

    tapButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add('active')
                }else {
                    content.classList.remove('active')
                }
            })
        })
    })
})

const ones = document.getElementsByClassName('bestseller-contents-box');

for(let i = 0 ; i < ones.length ; i ++) {
    const imgBefore = ones[i].querySelector('#img-before')
    const imgAfter = ones[i].querySelector('#img-after')

    imgAfter.addEventListener('mouseover', function() {
        imgBefore.style.opacity = '0';
        imgAfter.style.opacity = '1';
    });

    imgAfter.addEventListener('mouseout', function() {
        imgBefore.style.opacity = '1';
        imgAfter.style.opacity = '0';
    })
}
