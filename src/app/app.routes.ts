import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BooksComponent } from './books/books.component';
import { ReadersComponent } from './readers/readers.component';
import { ReadersDetailComponent } from './readers-detail/readers-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'readers',
    component: ReadersComponent,
  },
  {
    path: 'readers/:id',
    component: ReadersDetailComponent,
  },
];
