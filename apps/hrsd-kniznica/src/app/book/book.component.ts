
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Book } from '../main/book.interface';
import { BookService } from './book.service';
import { Loan } from './loan.interface';

@Component({
  selector: 'hrsd-kniznica-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  constructor(private readonly bookService: BookService, private readonly router: Router) {}

  @Input() book!: Book;  // from main component

  @Output() bookRemoved = new EventEmitter<Book>();  //  to main to refresh list of books
  @Output() bookUpdated = new EventEmitter<Book>();  // same...

  removeBook(): void {
    if (this.book) {
      this.bookService.removeBook(this.book._id!)
        .subscribe({
          next: () => {
            console.log('book deleted');
            this.bookRemoved.emit(this.book);
          },
          error: err => console.error(err),
          complete: () => console.log('deleting is DONE!')
        });
    };
  };

  // function to update status of the book to opposite (toogle them)
  updateStatus(): void {
    const updatedBook: Book = {
      _id: this.book._id,
      name: this.book.name,
      author: this.book.author,
      description: this.book.description,
      status: !this.book.status,
    }
    const loanRecord: Loan = {
      book: this.book._id!,
      when: new Date,
      status: !this.book.status,
    }

    this.bookService.updateStatus(updatedBook)
      .subscribe({
        next: () => {
          console.log('book updated');
          this.bookUpdated.emit(this.book);
        },
        error: err => console.error(err),
        complete: () => console.log('updating book is DONE')
      });

    this.bookService.addLoanRecord(loanRecord)
      .subscribe({
        next: () => console.log('loan record send'),
        error: err => console.error(err),
        complete: () => console.log('loan record CREATED!')
      });
  };

  navigateToAbout(): void {
    const id: string = this.book._id!;
    this.router.navigate([id]);
  };
};
