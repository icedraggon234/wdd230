const hamburgerMenuButton = document.querySelector("#hamburgerMenuButton");
const navList = document.querySelector(".navList");

hamburgerMenuButton.addEventListener("click", () => {
    navList.classList.toggle("open");
    hamburgerMenuButton.classList.toggle("open");
}

);