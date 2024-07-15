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

const colorPick = document.getElementsByClassName('color-pick');
const bestImg = document.querySelector('.best-img')
const imgPlace = bestImg.querySelector('img');


    for(let i = 0 ; i < colorPick.length ; i ++) {
        colorPick[i].style.backgroundColor = colorPallet[i].color;

        colorPick[i].addEventListener('click',()=>{
            imgPlace.setAttribute('src',`../img/베셀/${colorPallet[i].src}.png`)
        })

    }

    // 