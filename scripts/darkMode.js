const darkModeButton = document.querySelector("#darkModeButton");
const body = document.querySelector("body");

darkModeButton.addEventListener("click", () => {
body.classList.toggle("dark");
})