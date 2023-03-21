
const form =  document.querySelector('.form');
const radio = document.querySelectorAll(".btn-radio");
const thanks =  document.querySelector(".submit-container");
const main = document.querySelector(".container");
const submit =  document.querySelector(".btn")
const rate =  document.querySelector(".rate")
const again = document.querySelector(".btn-again")


form.addEventListener('submit', function(event){
    event.preventDefault()
    thanks.classList.remove("thank-you")
    main.classList.add("thank-you")
})

again.addEventListener("click", function(){
    thanks.classList.add("thank-you")
    main.classList.remove("thank-you")
})

radio.forEach(function(radio){
    radio.addEventListener('click', function(e){
        let score = e.currentTarget.id;
        // console.log(score);
        rate.innerHTML = `You have selected ${score} out of 5`;
    })
})