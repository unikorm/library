
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Book } from '../main/book.interface';
import { FormToAddBookService } from './formToAddBook.service';

@Component({
  selector: 'hrsd-kniznica-form-to-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formToAddBook.component.html',
  styleUrl: './formToAddBook.component.scss',
})
export class FormToAddBookComponent implements OnInit {
  constructor(private readonly addService: FormToAddBookService) {}

  private actor: Book = {name: '', author: '', description: ''};
  form!: FormGroup;
  newBooks$: Book[] = [];
  @Output() updatedBooks = new EventEmitter<Book[]>();

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl<string>(this.actor.name, [Validators.required]),
      author: new FormControl<string>(this.actor.author, [Validators.required]),
      description: new FormControl<string>(this.actor.description, [Validators.required, Validators.minLength(20)]),
    });
  };

  onSubmit(): void {
    const book: Book = {
      name: this.form.value.name,
      author: this.form.value.author,
      description: this.form.value.description
    };
    this.addService.addBook(book)
      .subscribe({
        next: value => {
          console.log(value);
          this.addService.updateBooksList()
          .subscribe({
            next: (result: Book[]) => {
              this.newBooks$ = result;
              this.updatedBooks.emit(this.newBooks$);
              console.log(this.newBooks$);
            }
          })
        },
        error: value => console.error(value),
        complete: () => console.log('book is added into database!')
      });
    this.form.reset();
  };
};
