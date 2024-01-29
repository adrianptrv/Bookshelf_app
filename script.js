"use strict";

var items = [];

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
        newBook.innerHTML = '<td>' + this.name + '</td><td>' + this.author + '</td><td>' + this.category + '</td><td>' + this.year + '</td><td>' + this.read + '</td><td>' + this.isbn + '</td>' + '<a onclick="delBook(this)">X</a>';
        list.appendChild(newBook);
    }
}
document.getElementById("Submit-btn").addEventListener('click', () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    changeClass();
    const nameV = document.querySelector("#BookName").value;
    const authorV = document.querySelector("#BookAuthor").value;
    const categoryV = document.querySelector("#BookCategory").value;
    const yearV = parseInt(document.querySelector("#BookYear").value);
    const readV = parseInt(document.querySelector("#BookRead").value);
    const isbnV = parseInt(document.querySelector("#BookISBN").value);
    if (nameV === '' || authorV === '' || ((_a = document.querySelector("#BookYear")) === null || _a === void 0 ? void 0 : _a.value) == '' || ((_b = document.querySelector("#BookISBN")) === null || _b === void 0 ? void 0 : _b.value) == '') {
        (_c = document.querySelector("#alertFill")) === null || _c === void 0 ? void 0 : _c.classList.add("block");
        (_d = document.querySelector("#alertFill")) === null || _d === void 0 ? void 0 : _d.classList.remove("hidden");
        if (nameV === '') {
            (_e = document.querySelector("#BookNameL")) === null || _e === void 0 ? void 0 : _e.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_f = document.querySelector("#BookNameT")) === null || _f === void 0 ? void 0 : _f.classList.add("text-rose-500");
        }
        if (authorV === '') {
            (_g = document.querySelector("#BookAuthorL")) === null || _g === void 0 ? void 0 : _g.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_h = document.querySelector("#BookAuthorT")) === null || _h === void 0 ? void 0 : _h.classList.add("text-rose-500");
        }
        if (((_j = document.querySelector("#BookYear")) === null || _j === void 0 ? void 0 : _j.value) == '') {
            (_k = document.querySelector("#BookYearL")) === null || _k === void 0 ? void 0 : _k.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_l = document.querySelector("#BookYearT")) === null || _l === void 0 ? void 0 : _l.classList.add("text-rose-500");
        }
        else if (((_m = document.querySelector("#BookYear")) === null || _m === void 0 ? void 0 : _m.value) !== '' && isNaN(yearV)) {
            (_o = document.querySelector("#alertType")) === null || _o === void 0 ? void 0 : _o.classList.add("block");
            (_p = document.querySelector("#alertType")) === null || _p === void 0 ? void 0 : _p.classList.remove("hidden");
            (_q = document.querySelector("#BookYearL")) === null || _q === void 0 ? void 0 : _q.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_r = document.querySelector("#BookYearT")) === null || _r === void 0 ? void 0 : _r.classList.add("text-rose-500");
        }
        if (((_s = document.querySelector("#BookISBN")) === null || _s === void 0 ? void 0 : _s.value) == '') {
            (_t = document.querySelector("#ISBNL")) === null || _t === void 0 ? void 0 : _t.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_u = document.querySelector("#ISBNT")) === null || _u === void 0 ? void 0 : _u.classList.add("text-rose-500");
        }
        else if (((_v = document.querySelector("#BookISBN")) === null || _v === void 0 ? void 0 : _v.value) !== '' && isNaN(isbnV)) {
            (_w = document.querySelector("#alertType")) === null || _w === void 0 ? void 0 : _w.classList.add("block");
            (_x = document.querySelector("#alertType")) === null || _x === void 0 ? void 0 : _x.classList.remove("hidden");
            (_y = document.querySelector("#ISBNL")) === null || _y === void 0 ? void 0 : _y.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_z = document.querySelector("#ISBNT")) === null || _z === void 0 ? void 0 : _z.classList.add("text-rose-500");
        }
    }
    else if (isNaN(yearV) || isNaN(isbnV)) {
        (_0 = document.querySelector("#alertType")) === null || _0 === void 0 ? void 0 : _0.classList.add("block");
        (_1 = document.querySelector("#alertType")) === null || _1 === void 0 ? void 0 : _1.classList.remove("hidden");
        if (isNaN(yearV)) {
            (_2 = document.querySelector("#BookYearL")) === null || _2 === void 0 ? void 0 : _2.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_3 = document.querySelector("#BookYearT")) === null || _3 === void 0 ? void 0 : _3.classList.add("text-rose-500");
        }
        if (isNaN(isbnV)) {
            (_4 = document.querySelector("#ISBNL")) === null || _4 === void 0 ? void 0 : _4.classList.add("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
            (_5 = document.querySelector("#ISBNT")) === null || _5 === void 0 ? void 0 : _5.classList.add("text-rose-500");
        }
    }
    else {
        const book1 = new Book(nameV, authorV, categoryV, yearV, readV, isbnV);
        book1.add();

        items.push(book1);
        localStorage.setItem("stored", JSON.stringify(items));

    }
});
function changeClass() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    (_a = document.querySelector("#alertFill")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    (_b = document.querySelector("#alertType")) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
    (_c = document.querySelector("#BookNameL")) === null || _c === void 0 ? void 0 : _c.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    (_d = document.querySelector("#BookNameT")) === null || _d === void 0 ? void 0 : _d.classList.remove("text-rose-500");
    (_e = document.querySelector("#BookAuthorL")) === null || _e === void 0 ? void 0 : _e.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    (_f = document.querySelector("#BookAuthorT")) === null || _f === void 0 ? void 0 : _f.classList.remove("text-rose-500");
    (_g = document.querySelector("#BookYearL")) === null || _g === void 0 ? void 0 : _g.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    (_h = document.querySelector("#BookYearT")) === null || _h === void 0 ? void 0 : _h.classList.remove("text-rose-500");
    (_j = document.querySelector("#ISBNL")) === null || _j === void 0 ? void 0 : _j.classList.remove("border-red-500", "focus-within:border-red-500", "focus-within:ring-red-500");
    (_k = document.querySelector("#ISBNT")) === null || _k === void 0 ? void 0 : _k.classList.remove("text-rose-500");
}
function delBook(el) {
    el.parentElement.remove();
}
