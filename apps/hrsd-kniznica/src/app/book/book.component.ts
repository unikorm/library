
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hrsd-kniznica-book',
  standalone: true,
  imports: [CommonModule],  // routing is problem a bit for me
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {}  // here will be service to handle clicking on each buttons
