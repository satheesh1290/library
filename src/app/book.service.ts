import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl =
    'https://static-server-0vfd.onrender.com' || 'http://localhost:3000'; // Adjust URL as per your server

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Get all books
  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books`);
  }

  // Get all readers
  getAllReaders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/readers`);
  }

  // Get reader by ID
  getReaderById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/readers/${id}`);
  }

  addBook(book: { id: number; title: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/books`, book, this.httpOptions);
  }

  // Delete a book by ID
  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/books/${id}`,
      this.httpOptions
    );
  }

  // Add a new reader
  addReader(reader: {
    id: number;
    name: string;
    booksIssued: number[];
  }): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/readers`,
      reader,
      this.httpOptions
    );
  }

  // Delete a reader by ID
  deleteReader(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/readers/${id}`,
      this.httpOptions
    );
  }
}
