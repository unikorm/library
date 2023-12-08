import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@nestjs/core';
// import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'hrsd-kniznica-book',
  standalone: true,
  imports: [CommonModule],  // routing is problem a bit for me
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {}
