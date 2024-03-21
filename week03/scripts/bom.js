const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];


chaptersArray.forEach((chapter) => {
    displayList(chapter);
  });



button.addEventListener("click", () => {
    if (input.value != "") {
        input.setAttribute("placeholder", "Alma 5");

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
    else {
        input.setAttribute("placeholder", "Please enter a book and chapter");
        input.focus();
    }
});


function getChapterList() {
    return JSON.parse(localStorage.getItem('chaptersList'));
}

function setChapterList() {
    localStorage.setItem('chaptersList', JSON.stringify(chaptersArray));
}

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", () => {
        li.remove();
        input.focus();
        deleteChapter(li.textContent);
    });
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}