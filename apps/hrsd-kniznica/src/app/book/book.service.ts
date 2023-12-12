
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private readonly http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeBook(id: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.delete(`http://localhost:3000/books/${id}`, { headers })
  }
};
