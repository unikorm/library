
import { Component, OnInit } from '@angular/core';
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
  // title = 'Form to add book';
  constructor(private readonly addService: FormToAddBookService) {}

  actor: Book = {name: '', author: '', description: ''};
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl<string>(this.actor.name, [Validators.required]),
      author: new FormControl<string>(this.actor.author, [Validators.required]),
      description: new FormControl<string>(this.actor.description, [Validators.required, Validators.minLength(20)]),
    });
    // this.form.valueChanges.subscribe(console.log)
  };

  // get name(): AbstractControl<string> | null { return this.form.get('name'); }

  onSubmit(): void {
    // console.warn(this.form.value);
    const book: Book = {
      name: this.form.value.name,
      author: this.form.value.author,
      description: this.form.value.description
    }
    this.addService.addBook(book)
      .subscribe({
        next: value => console.log(value),
        error: value => console.error(value),
        complete: () => console.log('book is added into database!')
      })
    this.form.reset();
  }

}
