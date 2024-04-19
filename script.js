"use strict";

const addBtn = document.querySelector(".openDialog");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("dialog .closeBtn");

document.addEventListener("DOMContentLoaded", function () {
  dialog.close();
});

addBtn.addEventListener("click", function () {
  dialog.showModal();
});

function processForm() {
  const bookName = document.querySelector("#book_name").value;
  const author = document.querySelector("#author_name").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  const book=new makeBook(bookName,author,pages,read);
  addBook(book);
}

let books = [];

function makeBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {
  books.push(book);
//   console.log(books)
    sayTitle();
}

function sayTitle(){
    books.forEach(function(book){
        console.log(book.title);
    })
}


