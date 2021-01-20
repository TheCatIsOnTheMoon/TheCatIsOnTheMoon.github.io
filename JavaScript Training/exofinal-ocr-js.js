export class Book {
    constructor (title, author, description, pages, currentPage, read) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = read;
    }

    readBook(page) {
        if( page < 1 || page > this.pages) {
            return 0;
        } else if( page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;
        } else if( page == this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

let illiade = new Book ("Illade", "Homère", "Histoire de la guerre de Troie", 600, 450, false);
let odysee = new Book ("Odysée", "Homère", "Le voyage de retour d'Ulysse", 400, 25, false);
let banquet = new Book ("Le Banquet", "Platon", "Suite de longs discours sur la nature de l'amour", 350, 150, false);

export const books = [illiade, odysee, banquet];
