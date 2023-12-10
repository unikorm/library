
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book } from './schemas/book.schema';
import { AddBookDTO } from './DTO/add-book.dto';

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>) {}

    async findAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    async findOne(id: string): Promise<Book> {
        return await this.bookModel.findOne({ _id: id }).exec();
    }

    async create(addBookDTO: AddBookDTO): Promise<Book> {
        const newBook = await this.bookModel.create(addBookDTO);
        return newBook;
    }

    async remove(id: string) {
        const removedBook = await this.bookModel.findByIdAndDelete({ _id: id }).exec();
        return removedBook;
    }

    async updateStatus(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book, { new: true })
    }
}
