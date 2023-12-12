
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { BookComponent } from '../book/book.component';
import { FormToAddBookComponent } from '../formToAddBook/formToAddBook.component';
import { Book } from './book.interface';
import { MainService } from './main.service';

@Component({
  selector: 'hrsd-kniznica-main',
  standalone: true,
  imports: [CommonModule, BookComponent, FormToAddBookComponent, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  // title = 'Main';
  books$: Book[] = [];

  constructor(private readonly mainService: MainService) {}

  ngOnInit(): void {
    
    this.mainService.getBooks()
      .subscribe({
        next: value => {
          this.books$ = value;
          console.log('List of books:', this.books$)
        },
        error: err => console.error(err),
        complete: () => console.log('Subscribing books is DONE!')
      });
  };

  formToAddBookComponent(data: Book[]) {
    this.books$ = data;
  }

  onBooksRemoved(): void {
    this.mainService.getBooks()
      .subscribe({
        next: value => {
          this.books$ = value;
          console.log('List of books:', this.books$)
        },
        error: err => console.error(err),
        complete: () => console.log('Subscribing books is DONE!')
      });
  };
};
