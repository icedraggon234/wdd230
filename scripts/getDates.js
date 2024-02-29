document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;

document.querySelector("footer p").innerHTML = "© " + new Date().toLocaleDateString("en-US", {year: "numeric"}) + document.querySelector("footer p").innerHTML;
