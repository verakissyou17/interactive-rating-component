const submitBtn = document.querySelector(".submit-btn")
const rateAgainBtn = document.querySelector(".rate-btn")
const wrapper = document.querySelector(".wrapper")
const thankYou = document.querySelector(".thank-you")
const ratingButtons = document.querySelectorAll(".rating-btn")
const thanksPoints = document.querySelector(".thanks-points")

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  thankYou.classList.remove("hidden")
  wrapper.style.display = "none"
})

rateAgainBtn.addEventListener("click", () => {
  thankYou.classList.add("hidden")
  wrapper.style.display = "block"
})

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    thanksPoints.innerHTML = btn.innerHTML
  })
})
