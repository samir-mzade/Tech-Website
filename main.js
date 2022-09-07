let burgerLine =document.querySelector(".burger__line")
let burgerMenu= document.querySelector(".burger__menu")




burgerLine.addEventListener("click" ,() => {

    burgerMenu.classList.toggle("active")
})


let accordion = document.querySelectorAll(".popUpText")
accordion.forEach( e => {
    e.querySelector(".popUpInner").classList.remove("active__inner")
    e.addEventListener("click", () => {
        accordion.forEach(a => {
            if (e != a) {
                a.querySelector(".popUpInner").classList.remove("active__inner")
            a.classList.remove("popUpBcg")
            }
        });
        e.classList.toggle("popUpBcg")
        e.querySelector(".popUpInner").classList.toggle("active__inner")
    })
})
