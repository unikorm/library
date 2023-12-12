
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private books$: Book[] = [];

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books', {responseType: 'json'})  
  };

  updateBooksList() {
    return this.http.get<Book[]>('http://localhost:3000/books', {responseType: 'json'})
      .subscribe({
        next: (result: Book[]) => {
          this.books$ = result,
          console.log(this.books$)
        }
      })
  };
}
