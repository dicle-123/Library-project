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
      if (this.name && this.author && this.pages) {
        container.innerHTML += `Book name:${book.name}, Author:${book.author}, Pages:${book.pages}, Read:${book.read}`;
      }
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
});
