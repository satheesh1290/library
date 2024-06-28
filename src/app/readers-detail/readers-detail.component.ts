import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readers-detail',
  standalone: true,
  imports: [],
  templateUrl: './readers-detail.component.html',
  styleUrl: './readers-detail.component.css',
})
export class ReadersDetailComponent implements OnInit {
  reader: any = '';
  readerId: number = 0;
  constructor(private bs: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.readerId = Number(params.get('id'));
      this.getReaderById(this.readerId);
    });
  }

  getReaderById(id: number) {
    this.bs.getReaderById(id).subscribe(
      (data) => {
        this.reader = data;
        console.log(this.reader, data);
      },
      (error) => {
        console.error('Error fetching readers:', error);
      }
    );
  }
}
