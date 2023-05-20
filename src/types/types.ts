interface BooksInfo {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
interface SearchInfo {
  error: string;
  total: string;
  page: string;
  books: BooksInfo[];
}
interface NewInfo {
  error: string;
  total: string;
  books: BooksInfo[];
}

interface PdfApi {
  "Chapter 2": string;
  "Chapter 5": string;
}
interface BookInfo {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: PdfApi;
}

interface BookStore {
  Search: SearchInfo;
  New: NewInfo;
  Books: BookInfo;
}

export type { SearchInfo, BookInfo, NewInfo, BookStore };
