
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { FormGroup } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormToAddBookService {

//   constructor(private readonly http: HttpClient) { }

//   async addBook(form: FormGroup): Promise<void> {
//     const formData = new FormData();
//     const name: string = form.get('name')!.value;
//     const author: string = form.get('author')!.value;
//     const description: string = form.get('description')!.value;

//     formData.append('name', name);
//     formData.append('author', author);
//     formData.append('description', description);

//     try {
//       await this.http.post<FormData>('books', formData);   // idk what would it be 'books'
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
