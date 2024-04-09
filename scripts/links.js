const linksUlElement = document.querySelector("#links");
const baseURL = "https://icedraggon234.github.io/wdd230/";
const linksURL = "https://icedraggon234.github.io/wdd230/data/links.json"

linksUlElement.innerHTML = "";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    // console.table(data);

    displayLinks(data);

}

function displayLinks(weeks) {
    weeks.weeks.forEach(week => {
        const liElement = document.createElement("li");
        liElement.textContent = `${week.week}: `;
        
        week.links.forEach((link, index) => {
            const linkSrc = link.url;
            const linkTitle = link.title;

            if (week.links.length-1 > index) {
                liElement.innerHTML += `<a href="${linkSrc}">${linkTitle}</a> | `
            }
            else {
                liElement.innerHTML += `<a href="${linkSrc}">${linkTitle}</a>`
            }
        });

        linksUlElement.appendChild(liElement);
    });
}


getLinks();

