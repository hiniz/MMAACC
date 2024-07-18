const colorPallet = [
    {
        src : '엘레강스이즈런드',
        color : '#C4304F'
    },
    {
        src : '핫팬츠',
        color : '#9E1B24'
    },
    {
        src : '디보티드투칠리',
        color : '#9E2C22'
    },
    {
        src : '루비부',
        color : '#821424'
    },
    {
        src : '프리티플릿츠',
        color : '#331110'
    },
    {
        src : '패션이머전시',
        color : '#7A1F26'
    }

]

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


// const imgPlace = bestImg.querySelector('img');


    // for(let i = 0 ; i < colorPick.length ; i ++) {
    //     colorPick[i].style.backgroundColor = colorPallet[i].color;

       

    // }

    // 