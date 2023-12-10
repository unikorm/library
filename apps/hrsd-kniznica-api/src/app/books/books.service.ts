
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


import { Book } from './interfaces/book.interface';


@Injectable()
export class BooksService {

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

    async findAll(): Promise<Book[]> {
        return await this.bookModel.find()
    }

    async findOne(name: string): Promise<Book> {
        return await this.bookModel.findOne({ name: name });
    }
}
