import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readers',
  standalone: true,
  imports: [],
  templateUrl: './readers.component.html',
  styleUrl: './readers.component.css',
})
export class ReadersComponent implements OnInit {
  readers: any[] = [];

  constructor(private bs: BookService, private router: Router) {}

  ngOnInit(): void {
    this.getAllReaders();
  }

  getAllReaders(): void {
    this.bs.getAllReaders().subscribe(
      (data) => {
        this.readers = data;
      },
      (error) => {
        console.error('Error fetching readers:', error);
      }
    );
  }

  readerDetails(id: number) {
    this.router.navigateByUrl(`/readers/${id}`);
  }

  addUser() {
    const reader = {
      id: this.readers.length + 1,
      name: `Reader ${this.readers.length + 1}`,
      booksIssued: [Math.floor(Math.random() * this.readers.length)],
    };
    console.log(reader.booksIssued);
    this.bs.addReader(reader).subscribe(() => {
      this.getAllReaders();
    });
  }
  deleteUser(id: number) {
    this.bs.deleteReader(id).subscribe(() => {
      this.getAllReaders();
    });
  }
}
