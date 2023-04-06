const ratingCard = document.querySelector(".rating")
const  thanksCard = document.querySelector(".thanks")
const ratingNumbers = document.querySelectorAll(".rating__num")
const button = document.querySelector(".rating__btn")
const resultNumber = document.querySelector("[data-result]")

let numberSelected = false
document.addEventListener("click", e=>{
    if (!e.target.matches(".rating__num")) return

    ratingNumbers.forEach(num=>num.classList.remove("rating__num--active"))
    e.target.classList.add("rating__num--active")
    numberSelected = true
    resultNumber.innerText = e.target.innerText
})

button.addEventListener("click", ()=>{
    if (!numberSelected) return

    ratingCard.classList.add("rating--hidden")
    thanksCard.classList.remove("thanks--hidden")
})



