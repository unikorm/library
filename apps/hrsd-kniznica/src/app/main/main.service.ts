
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private readonly http: HttpClient) { }

  getItems() {
    return this.http.get('http://localhost:3000');
  }
}
