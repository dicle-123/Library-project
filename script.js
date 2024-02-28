const addBtn = document.querySelector(".newBook");
const container = document.querySelector(".container");

let arry = [];
function addBook(name, author, pages, read) {
  arry.push({
    name: name,
    author: author,
    pages: pages,
    read: read,
  });
}

addBtn.addEventListener("click", addBook);
