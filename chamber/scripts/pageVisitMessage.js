const currentDate = new Date();
const visitMessage = document.querySelector("#visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
localStorage.setItem("lastVisit", currentDate)

if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    // const lastVisitDate = new Date(2024, 2, 4, 12);
    let daysSinceLastVisit = (currentDate - lastVisitDate) / (1000 * 60 * 60 * 24);
    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    }
    else {
        daysSinceLastVisit = Math.floor(daysSinceLastVisit);
        if (daysSinceLastVisit == 1) {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} day ago.`;
        }
        else if (daysSinceLastVisit > 1) {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
        else {
            visitMessage.textContent = "Woops, something went wrong. Hopefully you don't see this.";
        }
    }
}
else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions."
}