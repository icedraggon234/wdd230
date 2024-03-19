const visitCountElement = document.querySelector("#visitCount");

let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;

if (visitCount == 0) {
    visitCountElement.textContent = "This is your first visit. Welcome to my home page!";
}
else if (visitCount > 0) {
    visitCountElement.textContent = `Times visited: ${visitCount}`;
}
else {
    visitCountElement.textContent = "Oops, something has gone wrong. Hopefully you don't see this message.";
}

visitCount++;

localStorage.setItem("visitCount-ls", visitCount);