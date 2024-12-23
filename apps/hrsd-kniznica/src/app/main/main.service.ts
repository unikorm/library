
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books', {responseType: 'json'});
  };
};
