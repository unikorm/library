
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inject } from '@nestjs/common';

import { Book } from './schemas/book.schema';
import { AddBookDTO } from './DTO/add-book.dto';
import { LoansService } from '../loans/loans.service';

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>,  @Inject(LoansService) private loansService: LoansService) {}

    async findAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    async findOne(id: string): Promise<Book> {
        return await this.bookModel.findOne({ _id: id }).exec();
    }

    async create(addBookDTO: AddBookDTO): Promise<Book> {
        return await this.bookModel.create(addBookDTO);
    }

    async remove(id: string): Promise<void> {
        await this.loansService.removeLoanRecords(id);
        await this.bookModel.findByIdAndDelete({ _id: id }).exec();
    }

    async updateStatus(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book, { new: true })
    }
}
