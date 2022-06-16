let btnAbout = document.getElementById("btn--about")
let contentAbout = document.querySelector(".about__body-content")

console.log('btnAbout', btnAbout);
console.log('content about', contentAbout);

const onClickShow = () => {
    btnAbout.addEventListener('click', (e) => {
        e.preventDefault()
        contentAbout.classList.toggle('about__body-content-show')
    })
}
onClickShow()