
import { Controller, Get, Post, Put, Delete,  Body, Param } from '@nestjs/common';

import { AddBookDTO } from './DTO/add-book.dto';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Get()  // this will be on getting all books on list of books
    async allBooks(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')  // this will be on getting separate book when user click on about 
    async bookByName(@Param('id') id: string): Promise<Book> {
        return this.booksService.findOne(id);
    }

    @Post()  // this will create new book from form to add new one
    async addBook(@Body() addBookDTO: AddBookDTO): Promise<Book> {
        return this.booksService.create(addBookDTO);
    }

    @Delete(':id')  // this will delete book when user hits delete btn
    async removeBook(@Param('id') id: string) {
        return this.booksService.remove(id);
    }

    @Put(':id') // this update status of loan/return book (but it works only with id, not name)
    async updateStatus(@Body() addBookDTO: AddBookDTO, @Param('id') id): Promise<Book> {
        return this.booksService.updateStatus(id, addBookDTO);
    }

}
