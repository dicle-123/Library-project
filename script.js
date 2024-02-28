const addBtn = document.getElementById("add-btn");
const bookList = document.querySelector(".booklist");
let myLibrary = [];
function addBook(name, author, pages, read) {
  return myLibrary.push({
    name: name,
    author: author,
    pages: pages,
    read: read,
  });
  displayBook();
}

function displayBook() {
  bookList.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.textContent = `Book name:${book.name}, Author:${book.author}, Pages:${book.pages}, Read:${book.read}`;
    bookList.appendChild(bookItem);
  });
}

addBtn.addEventListener("click", addBook);
