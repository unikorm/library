
import { Injectable } from '@nestjs/common';

import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
    private readonly books: Book[] = [
        {
            name: "sapiens",
            author: "yuval navali",
            description: "book about our history"
        },
        {
            name: "knife",
            author: "jo nesbo",
            description: "book about our crimes"
        }
    ]

    findAll(): Book[] {
        return this.books;
    }

    findOne(name: string): Book {
        return this.books.find(book => book.name === name);
    }
}
