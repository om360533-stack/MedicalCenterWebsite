const form = document.querySelector(".contact-form");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    formMessage.style.display = "block";
});