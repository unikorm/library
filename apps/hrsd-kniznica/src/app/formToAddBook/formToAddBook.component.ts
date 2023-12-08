import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hrsd-kniznica-form-to-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formToAddBook.component.html',
  styleUrl: './formToAddBook.component.scss',
})
export class FormToAddBookComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    }) 
  }

}
