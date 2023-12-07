import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { FormToAddBookComponent } from '../formToAddBook/formToAddBook.component';

@Component({
  selector: 'hrsd-kniznica-main',
  standalone: true,
  imports: [CommonModule, BookComponent, FormToAddBookComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
