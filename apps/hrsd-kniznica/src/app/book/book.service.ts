
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../main/book.interface';
import { Loan } from './loan.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private readonly http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeBook(id: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.delete(`http://localhost:3000/books/${id}`, { headers })
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateStatus(book: Book): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put(`http://localhost:3000/books/${book._id}`, JSON.stringify(book), { headers })
  };

  addLoanRecord(loan: Loan): Observable<Loan> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Loan>('http://localhost:3000/loans', JSON.stringify(loan), { headers })
  }

};
