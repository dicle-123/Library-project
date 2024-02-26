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
}

addBtn.addEventListener("click", addBook);
