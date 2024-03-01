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
    <button data-index=${index}class="remove-book">Remove</button>
   <button data-index=${index} class="toggle-btn">${
      book.read === "yes"
        ? "Marked Unread"
        : book.read === "no"
        ? "Marked Read"
        : null
    }</button>
    `;
  });
}

function addBook() {
  data.push({
    name: this.name,
    author: this.author,
    pages: this.pages,
    read: this.read,
  });
  this.displayBook();
}

addBtn.addEventListener("click", function () {
  const book = new Library(
    nameInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value
  );
  book.addBook();
  nameInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
});
