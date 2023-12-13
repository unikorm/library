
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';

import { AboutService } from './about.service';
import { Book } from '../main/book.interface';

@Component({
  selector: 'hrsd-kniznica-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  // title = 'About Book';
  book!: Book;

  constructor(private readonly aboutService: AboutService, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      const bookId: string = this.route.snapshot.params['id'];
      
      this.aboutService.getBook(bookId)
        .subscribe({
          next: (result: Book) => {
            this.book = result
            console.log('Data is ready!');
          },
          error: err => console.error(err),
          complete: () => console.log('Data loading is complete!')
        });
    };
  };
}
