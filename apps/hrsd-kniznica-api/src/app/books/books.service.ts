
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

    async create(book: Book): Promise<Book> {
        const newBook = new this.bookModel(book);
        return await newBook.save();
    }

    async remove(id: string): Promise<Book> {
        return await this.bookModel.findByIdAndRemove({ _id: id}).exec();
    }

    async updateStatus(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book, { new: true })
    }
}
