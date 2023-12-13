
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Book } from '../main/book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'hrsd-kniznica-book',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  // title = 'Book component';
  @Input() book!: Book;
  
  constructor(private readonly bookService: BookService) {}

  @Output() bookRemoved = new EventEmitter<Book>();
  @Output() bookUpdated = new EventEmitter<Book>();


  // function to delete book from database
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
    this.bookService.updateStatus(updatedBook)
      .subscribe({
        next: () => {
          console.log('book updated');
          this.bookUpdated.emit(this.book);
        },
        error: err => console.error(err),
        complete: () => console.log('updating book is DONE')
      });
  };

};
