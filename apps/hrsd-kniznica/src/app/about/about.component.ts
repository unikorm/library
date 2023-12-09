
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hrsd-kniznica-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {  // here will be imported service to handle showing correct data from database about book
  // title = 'About Book';
}
