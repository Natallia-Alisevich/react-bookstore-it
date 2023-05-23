interface BooksInfo {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  rating?: string;
}
interface SearchInfo {
  error: string | null;
  total: string;
  page: string;
  books: BooksInfo[];
}
interface NewInfo {
  error: string | null;
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

export type { BooksInfo, SearchInfo, BookInfo, NewInfo, BookStore };
