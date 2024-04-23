"use strict";

const addBtn = document.querySelector(".openDialog");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("dialog .closeBtn");
const bookInfo = document.querySelector(".bookInfo");
const submitBtn = document.querySelector(".submitBtn");
const bookForm = document.querySelector("#bookForm");

document.addEventListener("DOMContentLoaded", closeModal());
function closeModal() {
  dialog.close();
}

addBtn.addEventListener("click", function () {
  dialog.showModal();
});

function processForm() {
  let bookName = document.querySelector("#book_name");
  let author = document.querySelector("#author_name");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

  const book = new makeBook(
    bookName.value,
    author.value,
    pages.value,
    read.value
  );
  addBook(book);

  bookForm.reset();
  closeModal();
}

let books = [
  {
    title: "Harry Potter: Philospher's Stone ",
    author: "J.K Rowling",
    pages: 300,
    read: "Yes",
  },
];

function makeBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function updateDisplay() {
  bookInfo.textContent = "";

  books.forEach(function (book) {
    const title = document.createElement("div");
    title.textContent = book.title;
    title.setAttribute("class", "bookChildInfo");
    bookInfo.appendChild(title);

    const author = document.createElement("div");
    author.textContent = book.author;
    title.setAttribute("class", "bookChildInfo");
    bookInfo.appendChild(author);

    const pages = document.createElement("div");
    pages.textContent = book.pages;
    pages.setAttribute("class", "bookChildInfo");
    bookInfo.appendChild(pages);

    const read = document.createElement("div");
    read.textContent = book.read;
    read.setAttribute("class", "bookChildInfo");
    bookInfo.appendChild(read);
  });
}

function addBook(book) {
  books.push(book);
  updateDisplay();
  console.log(books);
}

updateDisplay();
