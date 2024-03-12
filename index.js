const rateButtons = document.querySelectorAll(".rating-btn");
const ratingtempo = document.querySelector("#ratingtempo");
const button = document.querySelector("#button");

rateButtons.forEach((button) => {
button.addEventListener("click", ( ) => {
    rateButtons.forEach((btn) =>{
    btn.backgroundColor = null;
    btn.style.Color = null;
    });
    button.addEventListener("click", () => {
        ratingtempo.innerText = button.innerText;
    });
})
});