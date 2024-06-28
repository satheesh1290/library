import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: any[] = [];

  constructor(private bs: BookService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bs.getAllBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
  addBook() {
    const newBook = {
      id: this.books.length + 1,
      title: `Book ${this.books.length + 1}`,
    };
    this.bs.addBook(newBook).subscribe(() => {
      this.getAllBooks();
    });
  }
  deleteBook(id: number) {
    this.bs.deleteBook(id).subscribe(() => {
      this.getAllBooks();
    });
  }
}
