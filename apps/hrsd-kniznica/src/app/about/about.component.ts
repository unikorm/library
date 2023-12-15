
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { Title } from '@angular/platform-browser';

import { AboutService } from './about.service';
import { Book } from '../main/book.interface';
import { Loan } from '../book/loan.interface';

@Component({
  selector: 'hrsd-kniznica-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  // title = 'About';
  book$!: Observable<Book>;
  loanRecords$!: Observable<Loan[]>

  constructor(private readonly aboutService: AboutService, private readonly route: ActivatedRoute) {}

  formatDate = (date: Date) =>
      new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
  });

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      const bookId: string = this.route.snapshot.paramMap.get('id')!;
      
      this.book$ = this.aboutService.getBook(bookId);
      this.loanRecords$ = this.aboutService.getLoans(bookId);
    };
  };
}
