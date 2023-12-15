
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../main/book.interface';
import { Loan } from '../book/loan.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private readonly httpClient: HttpClient) {}

  getBook(bookId: string): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:3000/books/${bookId}`, {responseType: 'json'})
  };

  getLoans(bookId: string): Observable<Loan[]> {
    return this.httpClient.get<Loan[]>(`http://localhost:3000/loans/${bookId}`, {responseType: 'json'})
  };
};
