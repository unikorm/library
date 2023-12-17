
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../main/book.interface';

@Injectable({
  providedIn: 'root'
})
export class FormToAddBookService {

  constructor(private readonly http: HttpClient) {}

  addBook(book: Book): Observable<Book> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Book>('http://localhost:3000/books', JSON.stringify(book), { headers });
  };

  updateBooksList(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books', {responseType: 'json'})
  };
};
