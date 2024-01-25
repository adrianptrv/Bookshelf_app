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
        newBook.innerHTML = '<td>' + this.name + '</td><td>' + this.author + '</td><td>'+ this.category + '</td><td>' + this.year + '</td><td>' + this.read + '</td><td>' + this.isbn + '</td>' + '<a onclick="delBook(this)">X</a>';
        list.appendChild(newBook);
    }

}


document.getElementById("Submit-btn")!.addEventListener('click', () => {
    const name1: string = document.querySelector<HTMLInputElement>("#BookName")!.value;
    const author1 = document.querySelector<HTMLInputElement>("#BookAuthor")!.value;
    const category1: string  = document.querySelector<HTMLSelectElement>("#BookCategory")!.value;
    const year1: number  = parseInt(document.querySelector<HTMLInputElement>("#BookYear")!.value);
    const read1: number  = parseInt(document.querySelector<HTMLInputElement>("#BookRead")!.value);
    const isbn1: number = parseInt(document.querySelector<HTMLInputElement>("#BookISBN")!.value);

    const book1 = new Book(name1, author1, category1, year1, read1, isbn1);
    book1.add();

})

function delBook(el: any){
    el.parentElement.remove();
}