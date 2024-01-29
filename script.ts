
//Class for generating the book objects
class Book {
    name: string;
    author: string;
    category: string;
    year: number;
    read: number;
    isbn: number;
    constructor(name: string, author: string, category: string, year: number, read: number, isbn: number) {
        this.name = name;
        this.author = author;
        this.category = category;
        this.year = year;
        this.read = read;
        this.isbn = isbn;
    }

    //Method for adding the element with the new book information to the books table
    add() {
        const list = document.getElementById("book-list") as HTMLTableSectionElement;
        const newBook = document.createElement('tr');
        newBook.classList.add("odd:bg-white", "odd:dark:bg-gray-900", "even:bg-gray-50", "even:dark:bg-gray-800", "border-b", "dark:border-gray-700");
        newBook.innerHTML = '<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">' + this.name + '</th><td class="px-6 py-4">' + this.author + '</td><td class="px-6 py-4">' + this.category + '</td><td class="px-6 py-4">' + this.year + '</td><td class="px-6 py-4">' + this.read + '</td><td class="px-6 py-4">' + this.isbn + '</td>' + '<td class="px-6 py-4"><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onclick="delBook(this)">Remove</a></td>';
        list.appendChild(newBook);
    }

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
document.getElementById("Submit-btn")!.addEventListener('click', () => {
    //Clearing the style to default
    changeClass();
    //Getting the input values for generating the new object
    const nameV: string = document.querySelector<HTMLInputElement>("#BookName")!.value;
    const authorV = document.querySelector<HTMLInputElement>("#BookAuthor")!.value;
    const categoryV: string = document.querySelector<HTMLSelectElement>("#BookCategory")!.value;
    const yearV: number = parseInt(document.querySelector<HTMLInputElement>("#BookYear")!.value);
    const readV: number = parseInt(document.querySelector<HTMLInputElement>("#BookRead")!.value);
    const isbnV: number = parseInt(document.querySelector<HTMLInputElement>("#BookISBN")!.value);

    //Getting the raw value of the number input (Without beign converted to number) so we can check if the field is empty
    const BookYear = document.querySelector<HTMLInputElement>("#BookYear")?.value;
    const BookISBN = document.querySelector<HTMLInputElement>("#BookISBN")?.value;


    //Empty fields check and displaying "Error message"
    if (nameV === '' || authorV === '' || BookYear == '' || BookISBN == '') {
        alertFill?.classList.add("block")
        alertFill?.classList.remove("hidden")

        if (nameV === '') {
           BookNameL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
           BookNameT?.classList.add("text-rose-500");
        }
        if (authorV === '') {
            BookAuthorL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookAuthorT?.classList.add("text-rose-500");
        }
        if (BookYear == '') {
            BookYearL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookYearT?.classList.add("text-rose-500");
        }
        else if (BookYear !== '' && isNaN(yearV)) {
            alertType?.classList.add("block")
            alertType?.classList.remove("hidden")
            BookYearL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookYearT?.classList.add("text-rose-500");
        }
        if (BookISBN == '') {
            ISBNL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
           ISBNT?.classList.add("text-rose-500");
        }
        else if (BookISBN !== '' && isNaN(isbnV)) {
            alertType?.classList.add("block")
           alertType?.classList.remove("hidden")
            ISBNL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            ISBNT?.classList.add("text-rose-500");
        }
    }

    //Checking if the number fields have the right input type entered
    else if (isNaN(yearV) || isNaN(isbnV)) {
        alertType?.classList.add("block")
        alertType?.classList.remove("hidden")

        if (isNaN(yearV)) {
            BookYearL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            BookYearT?.classList.add("text-rose-500");
        }

        if (isNaN(isbnV)) {
            ISBNL?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            ISBNT?.classList.add("text-rose-500");
        }
    }

    //Creating the new book object
    else {
        const book1 = new Book(nameV, authorV, categoryV, yearV, readV, isbnV);
        book1.add();


    }

})

//Funtion for resseting the classes
function changeClass() {
    alertFill?.classList.add("hidden");
    alertType?.classList.add("hidden");

    BookNameL?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    BookNameT?.classList.remove("text-rose-500");

    BookAuthorL?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    BookAuthorT?.classList.remove("text-rose-500");

    BookYearL?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    BookYearT?.classList.remove("text-rose-500");

    ISBNL?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    ISBNT?.classList.remove("text-rose-500");
}

//Funtion for removign the specific book from the table with books
function delBook(el: any) {
    el.parentElement.remove();
}