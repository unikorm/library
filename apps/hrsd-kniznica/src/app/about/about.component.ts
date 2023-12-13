
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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
  book$!: Observable<Book>;

  constructor(private readonly aboutService: AboutService, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      const bookId: string = this.route.snapshot.params['id'];
      
      this.book$ = this.aboutService.getBook(bookId)
    };
  };
}
