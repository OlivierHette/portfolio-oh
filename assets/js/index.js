const contentAbout = document.querySelector(".about__body-content")
const contentCards = document.querySelectorAll('.card__body-content')

const btnAbout = document.getElementById("btn--about")
const btnP1 = document.getElementById('btnP1')

const groupomania = contentCards[0]

const onClickShow = () => {
    btnAbout.addEventListener('click', (e) => {
        e.preventDefault()

        contentAbout.classList.toggle('about__body-content-show')
    })
    btnP1.addEventListener('click', (e) => {
        e.preventDefault()
        groupomania.classList.toggle('card__body-content-show')
        console.log('class: ', groupomania);
    })
}

onClickShow()