"use strict";

const addBtn = document.querySelector(".openDialog");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("dialog .closeBtn");
const submitBtn = document.querySelector(".submitBtn");
const bookForm = document.querySelector("#bookForm");
const info = document.querySelector(".info");
let books = [];

document.addEventListener("DOMContentLoaded", closeModal);
function closeModal() {
  dialog.close();
}

addBtn.addEventListener("click", function () {
  dialog.showModal();
});

closeBtn.addEventListener('click', closeModal);

class myLib {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  createDisplay() {
    const bookInfo = document.createElement("div");
    bookInfo.classList.add('bookInfo');

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = this.title;

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = this.author;

    const pages = document.createElement("div");
    pages.classList.add("pages");
    pages.textContent = this.pages;

    const read = document.createElement("div");
    read.classList.add("read");
    read.textContent = this.read;

    bookInfo.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(pages);
    bookInfo.appendChild(read);

    info.appendChild(bookInfo);
  }
}

const newBook1=new myLib('Harry Potter and the Philosopher\'s Stone','J. K. Rowling',223, 'Yes')
newBook1.createDisplay();

const newBook2=new myLib('The Hunger Games','Suzanne Collins',374, 'No');
newBook2.createDisplay();

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = new FormData(this);
  let bookName = formData.get("book_name");
  let author = formData.get("author_name");
  let pages = formData.get("pages");
  let read = formData.get("read")==='Yes'?'Read':'Not Read';
  let newBook = new myLib(bookName, author, pages, read);
  books.push(newBook);
  newBook.createDisplay();

  bookForm.reset();
  closeModal();
});
