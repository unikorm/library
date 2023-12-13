
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../main/book.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private readonly httpClient: HttpClient) {}

  getBook(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:3000/books/${id}`, {responseType: 'json'})
  };
};
