import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { ReadersComponent } from './readers/readers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BooksComponent, ReadersComponent],
  template: `<app-books></app-books> <app-readers></app-readers>`,
  styles: ``,
})
export class HomeComponent {}
