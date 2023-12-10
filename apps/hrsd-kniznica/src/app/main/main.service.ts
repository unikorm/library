
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {


  getItems(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000', {responseType: 'json'})
      
  }
}
