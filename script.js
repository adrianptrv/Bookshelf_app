"use strict";
class Book {
    constructor(name, author, category, year, read, isbn) {
        this.name = name;
        this.author = author;
        this.category = category;
        this.year = year;
        this.read = read;
        this.isbn = isbn;
    }
    add() {
        const list = document.getElementById("book-list");
        const newBook = document.createElement('tr');
        newBook.classList.add("odd:bg-white", "odd:dark:bg-gray-900", "even:bg-gray-50", "even:dark:bg-gray-800", "border-b", "dark:border-gray-700")
        newBook.innerHTML = '<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">' + this.name + '</th><td class="px-6 py-4">' + this.author + '</td><td class="px-6 py-4">' + this.category + '</td><td class="px-6 py-4">' + this.year + '</td><td class="px-6 py-4">' + this.read + '</td><td class="px-6 py-4">' + this.isbn + '</td>' + '<td class="px-6 py-4"><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onclick="delBook(this)">Remove</a></td>';
        list.appendChild(newBook);
    }
}
document.getElementById("Submit-btn").addEventListener('click', () => {
    const name1 = document.querySelector("#BookName").value;
    const author1 = document.querySelector("#BookAuthor").value;
    const category1 = document.querySelector("#BookCategory").value;
    const year1 = parseInt(document.querySelector("#BookYear").value);
    const read1 = parseInt(document.querySelector("#BookRead").value);
    const isbn1 = parseInt(document.querySelector("#BookISBN").value);
    const book1 = new Book(name1, author1, category1, year1, read1, isbn1);
    book1.add();
});
function delBook(el) {
    el.parentElement.parentElement.remove();
}
