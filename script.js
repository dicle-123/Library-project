const myLibrary = getData() || [];

class Library {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const addBtn = document.querySelector(".newBook");
const container = document.querySelector(".container");
const nameInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

function displayBook() {
  container.innerHTML = "";
  let data = getData();
  data.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h2>${book.name}</h2>
    <p>Author:${book.author}</p>
    <p>Pages:${book.pages}</p>
    <p>Read:${book.read}</p>
    <button data-index=${index} class="remove-book">Remove</button>
   <button data-index=${index} class="toggle-btn">${
      book.read === "yes"
        ? "Marked Unread"
        : book.read === "no"
        ? "Marked Read"
        : null
    }</button>
    `;
    container.appendChild(card);
  });
}
function updateDataBase() {
  localStorage.setItem("books", JSON.stringify(myLibrary));
}

function getData() {
  return JSON.parse(localStorage.getItem("books"));
}

function addBook() {
  if (
    nameInput.value &&
    !myLibrary.some((book) => book.name === nameInput.value)
  ) {
    const newBook = new Library(
      nameInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.value
    );
    myLibrary.push(newBook);
    updateDataBase();

    displayBook();
    nameInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
  }
}

addBtn.addEventListener("click", addBook);

function removeBook(e) {
  if (e.target.classList.contains("remove-book")) {
    const index = e.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    updateDataBase();
    displayBook();
  }
}

container.addEventListener("click", removeBook);

function updateRead(e) {
  if (e.target.classList.contains("toggle-btn")) {
    const index = e.target.getAttribute("data-index");
    myLibrary[index].read = myLibrary[index].read === "yes" ? "no" : "yes";
    updateDataBase();
    displayBook();
  }
}

container.addEventListener("click", updateRead);

displayBook();
