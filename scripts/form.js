const ratingInput = document.querySelector("#rating");
const pageRatingValue = document.querySelector("#pageRatingValue");
pageRatingValue.textContent = ratingInput.value;

ratingInput.addEventListener("input", () => pageRatingValue.textContent = ratingInput.value)


const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const invalidMsg = document.querySelector("#invalidMsg");

confirmPassword.addEventListener("focusout", () => {
    if (password.value !== confirmPassword.value) {
        password.value = "";
        confirmPassword.value = "";
        password.focus();

        invalidMsg.textContent = "Passwords do not match"
        
    }
    else {
        invalidMsg.textContent = "";
    }
})