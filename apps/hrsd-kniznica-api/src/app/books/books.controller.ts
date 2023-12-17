
import { Controller, Get, Post, Put, Delete,  Body, Param } from '@nestjs/common';

import { AddBookDTO } from './DTO/add-book.dto';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Get()  // get all books from database
    async allBooks(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')  // get book based on her _id
    async bookByName(@Param('id') id: string): Promise<Book> {
        return this.booksService.findOne(id);
    }

    @Post()  //  create new book
    async addBook(@Body() addBookDTO: AddBookDTO): Promise<Book> {
        return this.booksService.create(addBookDTO);
    }

    @Delete(':id')  // delete book
    async removeBook(@Param('id') id: string): Promise<void> {
        return this.booksService.remove(id);
    }

    @Put(':id')  // update status value - loaned/returned ( depends on it showing buttons loan/return/delete )
    async updateStatus(@Body() addBookDTO: AddBookDTO, @Param('id') id): Promise<Book> {
        return this.booksService.updateStatus(id, addBookDTO);
    }
}
