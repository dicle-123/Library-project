let data = [];

class Library {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  addBook() {
    data.push({
      name: this.name,
      author: this.author,
      pages: this.pages,
      read: this.read,
    });
    this.displayBook();
  }

  displayBook() {
    container.innerHTML = "";
    data.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("card");
      if (this.name && this.author && this.pages) {
        card.innerHTML = `
        <p>Book name:${book.name}</p>
        <p>Author:${book.author}</p>
        <p>Pages:${book.pages}</p>
        <p>isRead:${book.read ? "Yes" : "No"} </p>`;
      }
      container.appendChild(card);
    });
  }
}

const addBtn = document.querySelector(".newBook");
const container = document.querySelector(".container");
const nameInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

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
