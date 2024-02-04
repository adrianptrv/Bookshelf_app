"use strict";
var items = [];
//Getting the array of book from local storage
if (localStorage.getItem('stored') !== null) {
    items = JSON.parse(localStorage.getItem('stored') || '');
}
//Class for generating the book objects
class Book {
    constructor(name, author, category, year, read, isbn) {
        this.name = name;
        this.author = author;
        this.category = category;
        this.year = year;
        this.read = read;
        this.isbn = isbn;
    }
    //Method for adding the element with the new book information to the books table
    add() {
        const list = document.getElementById("book-list");
        const newBook = document.createElement('tr');
        newBook.classList.add("odd:bg-white", "odd:dark:bg-gray-900", "even:bg-gray-50", "even:dark:bg-gray-800", "border-b", "dark:border-gray-700");
        newBook.innerHTML = '<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">' + this.name + '</th><td class="px-6 py-4">' + this.author + '</td><td class="px-6 py-4">' + this.category + '</td><td class="px-6 py-4">' + this.year + '</td><td class="px-6 py-4">' + this.read + '</td><td class="px-6 py-4">' + this.isbn + '</td>' + '<td class="px-6 py-4"><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onclick="delBook(this)">Remove</a></td>';
        list.appendChild(newBook);
    }
}
//Adding new object to the table for every book from the array of books from the local storage
var storageBooks;
for (let i = 0; i < items.length; i++) {
    storageBooks = new Book(items[i].name, items[i].author, items[i].category, items[i].year, items[i].read, items[i].isbn);
    storageBooks.add();
}
//Declaring the elements which we will manipulate if we don't have the full information 
const alertFill = document.querySelector("#alertFill");
const alertType = document.querySelector("#alertType");
const BookNameL = document.querySelector("#BookNameL");
const BookNameT = document.querySelector("#BookNameT");
const BookAuthorL = document.querySelector("#BookAuthorL");
const BookAuthorT = document.querySelector("#BookAuthorT");
const BookYearL = document.querySelector("#BookYearL");
const BookYearT = document.querySelector("#BookYearT");
const ISBNL = document.querySelector("#ISBNL");
const ISBNT = document.querySelector("#ISBNT");
// Submit action code
document.getElementById("Submit-btn").addEventListener('click', () => {
    var _a, _b;
    //Clearing the style to default
    changeClass();
    //Getting the input values for generating the new object
    const nameV = document.querySelector("#BookName").value;
    const authorV = document.querySelector("#BookAuthor").value;
    const categoryV = document.querySelector("#BookCategory").value;
    const yearV = parseInt(document.querySelector("#BookYear").value);
    const readV = parseInt(document.querySelector("#BookRead").value);
    const isbnV = parseInt(document.querySelector("#BookISBN").value);
    //Getting the raw value of the number input (Without beign converted to number) so we can check if the field is empty
    const BookYear = (_a = document.querySelector("#BookYear")) === null || _a === void 0 ? void 0 : _a.value;
    const BookISBN = (_b = document.querySelector("#BookISBN")) === null || _b === void 0 ? void 0 : _b.value;
    //Empty fields check and displaying "Error message"
    if (nameV === '' || authorV === '' || BookYear == '' || BookISBN == '') {
        alertFill === null || alertFill === void 0 ? void 0 : alertFill.classList.add("block");
        alertFill === null || alertFill === void 0 ? void 0 : alertFill.classList.remove("hidden");
        if (nameV === '') {
            BookNameL === null || BookNameL === void 0 ? void 0 : BookNameL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookNameT === null || BookNameT === void 0 ? void 0 : BookNameT.classList.add("text-rose-500");
        }
        if (authorV === '') {
            BookAuthorL === null || BookAuthorL === void 0 ? void 0 : BookAuthorL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookAuthorT === null || BookAuthorT === void 0 ? void 0 : BookAuthorT.classList.add("text-rose-500");
        }
        if (BookYear == '') {
            BookYearL === null || BookYearL === void 0 ? void 0 : BookYearL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookYearT === null || BookYearT === void 0 ? void 0 : BookYearT.classList.add("text-rose-500");
        }
        else if (BookYear !== '' && isNaN(yearV)) {
            alertType === null || alertType === void 0 ? void 0 : alertType.classList.add("block");
            alertType === null || alertType === void 0 ? void 0 : alertType.classList.remove("hidden");
            BookYearL === null || BookYearL === void 0 ? void 0 : BookYearL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookYearT === null || BookYearT === void 0 ? void 0 : BookYearT.classList.add("text-rose-500");
        }
        if (BookISBN == '') {
            ISBNL === null || ISBNL === void 0 ? void 0 : ISBNL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            ISBNT === null || ISBNT === void 0 ? void 0 : ISBNT.classList.add("text-rose-500");
        }
        else if (BookISBN !== '' && isNaN(isbnV)) {
            alertType === null || alertType === void 0 ? void 0 : alertType.classList.add("block");
            alertType === null || alertType === void 0 ? void 0 : alertType.classList.remove("hidden");
            ISBNL === null || ISBNL === void 0 ? void 0 : ISBNL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            ISBNT === null || ISBNT === void 0 ? void 0 : ISBNT.classList.add("text-rose-500");
        }
    }
    //Checking if the number fields have the right input type entered
    else if (isNaN(yearV) || isNaN(isbnV)) {
        alertType === null || alertType === void 0 ? void 0 : alertType.classList.add("block");
        alertType === null || alertType === void 0 ? void 0 : alertType.classList.remove("hidden");
        if (isNaN(yearV)) {
            BookYearL === null || BookYearL === void 0 ? void 0 : BookYearL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookYearT === null || BookYearT === void 0 ? void 0 : BookYearT.classList.add("text-rose-500");
        }
        if (isNaN(isbnV)) {
            ISBNL === null || ISBNL === void 0 ? void 0 : ISBNL.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            ISBNT === null || ISBNT === void 0 ? void 0 : ISBNT.classList.add("text-rose-500");
        }
    }
    //Creating the new book object
    else {
        const book1 = new Book(nameV, authorV, categoryV, yearV, readV, isbnV);
        book1.add();
        items.push(book1);
        localStorage.setItem("stored", JSON.stringify(items));
    }
});
//Funtion for resseting the classes
function changeClass() {
    alertFill === null || alertFill === void 0 ? void 0 : alertFill.classList.add("hidden");
    alertType === null || alertType === void 0 ? void 0 : alertType.classList.add("hidden");
    BookNameL === null || BookNameL === void 0 ? void 0 : BookNameL.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    BookNameT === null || BookNameT === void 0 ? void 0 : BookNameT.classList.remove("text-rose-500");
    BookAuthorL === null || BookAuthorL === void 0 ? void 0 : BookAuthorL.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    BookAuthorT === null || BookAuthorT === void 0 ? void 0 : BookAuthorT.classList.remove("text-rose-500");
    BookYearL === null || BookYearL === void 0 ? void 0 : BookYearL.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    BookYearT === null || BookYearT === void 0 ? void 0 : BookYearT.classList.remove("text-rose-500");
    ISBNL === null || ISBNL === void 0 ? void 0 : ISBNL.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    ISBNT === null || ISBNT === void 0 ? void 0 : ISBNT.classList.remove("text-rose-500");
}
//Funtion for removign the specific book from the table with books
function delBook(el) {
    el.parentElement.parentElement.remove();
    //Get the removing book name;
    var remName = el.parentElement.parentElement.firstElementChild.textContent;
    //Finding index of the removed element
    var remInd = items.findIndex(({ name }) => name === remName);
    //Removing the element 2 is an index
    items.splice(remInd, 1);
    //Writing in the local storage the new array with the removed item.
    localStorage.setItem("stored", JSON.stringify(items));
}
