//Часть C (Утилитные типы Omit и Record): Дан интерфейс Book. Создайте:

//Тип BookCatalogItem на основе Book, но без поля inStockCount.
//Тип LibraryCatalog, который представляет собой объект, где ключом является isbn книги (строка), а значением — объект типа BookCatalogItem
interface Book {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  inStockCount: number;
}

type BookCatalogItem = Omit<Book, 'inStockCount'>;

type LibraryCatalog = Record<string, BookCatalogItem>; // не совсем понял как работает record

/*const myBook: Book = {
  isbn: "123",
  title: "Hello",
  author: "Daniil Chikoy",
  pages: 350,
  inStockCount: 42
};

const catalogItem: BookCatalogItem = {
  isbn: "123",
  title: "Hello",
  author: "Daniil Chikoy",
  pages: 350
};


const library: LibraryCatalog = {
  "123": {
    isbn: "123",
    title: "Hello",
    author: "Daniil Chikoy",
    pages: 350
  },
  "321": {
    isbn: "312",
    title: "Bye",
    author: "Chikoy Daniil",
    pages: 464
  }
};

function addToCatalog(
  catalog: LibraryCatalog, 
  book: Book
): void {
  const { inStockCount, ...bookWithoutStock } = book;
  catalog[book.isbn] = bookWithoutStock;
}

addToCatalog(library, {
  isbn: "111",
  title: "Goodbay",
  author: "Daniil Chikoy,Chikoy Daniil",
  pages: 352,
  inStockCount: 15
});

console.log(library["123"], library["321"], library["111"]);*/