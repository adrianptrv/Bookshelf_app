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

    add() {
        const list = document.getElementById("book-list") as HTMLTableSectionElement;
        const newBook = document.createElement('tr');
        newBook.innerHTML = '<td>' + this.name + '</td><td>' + this.author + '</td><td>' + this.category + '</td><td>' + this.year + '</td><td>' + this.read + '</td><td>' + this.isbn + '</td>' + '<a onclick="delBook(this)">X</a>';
        list.appendChild(newBook);
    }

}


document.getElementById("Submit-btn")!.addEventListener('click', () => {
    changeClass();

    const nameV: string = document.querySelector<HTMLInputElement>("#BookName")!.value;
    const authorV = document.querySelector<HTMLInputElement>("#BookAuthor")!.value;
    const categoryV: string = document.querySelector<HTMLSelectElement>("#BookCategory")!.value;
    const yearV: number = parseInt(document.querySelector<HTMLInputElement>("#BookYear")!.value);
    const readV: number = parseInt(document.querySelector<HTMLInputElement>("#BookRead")!.value);
    const isbnV: number = parseInt(document.querySelector<HTMLInputElement>("#BookISBN")!.value);



    if (nameV === '' || authorV === '' || document.querySelector<HTMLInputElement>("#BookYear")?.value == '' || document.querySelector<HTMLInputElement>("#BookISBN")?.value == '') {
        document.querySelector("#alertFill")?.classList.add("block")
        document.querySelector("#alertFill")?.classList.remove("hidden")

        if (nameV === '') {
            document.querySelector("#BookNameL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#BookNameT")?.classList.add("text-rose-500");
        }
        if (authorV === '') {
            document.querySelector("#BookAuthorL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#BookAuthorT")?.classList.add("text-rose-500");
        }
        if (document.querySelector<HTMLInputElement>("#BookYear")?.value == '') {
            document.querySelector("#BookYearL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#BookYearT")?.classList.add("text-rose-500");
        }
        else if (document.querySelector<HTMLInputElement>("#BookYear")?.value !== '' && isNaN(yearV)) {
            document.querySelector("#alertType")?.classList.add("block")
            document.querySelector("#alertType")?.classList.remove("hidden")
            document.querySelector("#BookYearL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#BookYearT")?.classList.add("text-rose-500");
        }
        if (document.querySelector<HTMLInputElement>("#BookISBN")?.value == '') {
            document.querySelector("#ISBNL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#ISBNT")?.classList.add("text-rose-500");
        }
        else if (document.querySelector<HTMLInputElement>("#BookISBN")?.value !== '' && isNaN(isbnV)) {
            document.querySelector("#alertType")?.classList.add("block")
            document.querySelector("#alertType")?.classList.remove("hidden")
            document.querySelector("#ISBNL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#ISBNT")?.classList.add("text-rose-500");
        }
    }

    else if (isNaN(yearV) || isNaN(isbnV)) {
        document.querySelector("#alertType")?.classList.add("block")
        document.querySelector("#alertType")?.classList.remove("hidden")

        if (isNaN(yearV)) {
            document.querySelector("#BookYearL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#BookYearT")?.classList.add("text-rose-500");
        }

        if (isNaN(isbnV)) {
            document.querySelector("#ISBNL")?.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            document.querySelector("#ISBNT")?.classList.add("text-rose-500");
        }
    }

    else {
        const book1 = new Book(nameV, authorV, categoryV, yearV, readV, isbnV);
        book1.add();


    }

})

function changeClass() {
    document.querySelector("#alertFill")?.classList.add("hidden");
    document.querySelector("#alertType")?.classList.add("hidden");

    document.querySelector("#BookNameL")?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    document.querySelector("#BookNameT")?.classList.remove("text-rose-500");

    document.querySelector("#BookAuthorL")?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    document.querySelector("#BookAuthorT")?.classList.remove("text-rose-500");

    document.querySelector("#BookYearL")?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    document.querySelector("#BookYearT")?.classList.remove("text-rose-500");

    document.querySelector("#ISBNL")?.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    document.querySelector("#ISBNT")?.classList.remove("text-rose-500");
}

function delBook(el: any) {
    el.parentElement.remove();
}