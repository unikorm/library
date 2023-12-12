
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { Book } from '../main/book.interface';
import { FormToAddBookService } from './formToAddBook.service';

@Component({
  selector: 'hrsd-kniznica-form-to-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formToAddBook.component.html',
  styleUrl: './formToAddBook.component.scss',
})
export class FormToAddBookComponent implements OnInit {  // here will be imported services to handle sending valid forms to backend and database...
  // title = 'Form to add book';

  constructor(private readonly addService: FormToAddBookService) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    });
  };

}
