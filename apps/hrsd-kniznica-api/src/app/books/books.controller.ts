
import { Controller, Get, Post, Put, Delete,  Body, Param } from '@nestjs/common';

import { AddBookDTO } from './DTO/add-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Get()  // this will be on getting all books on list of books
    allBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':name')  // this will be on getting separate book when user click on about 
    bookByName(@Param('name') name): Promise<Book> {
        return this.bookService.findOne(name)
    }

    @Post()  // this will create new book from form to add new one
    addBook(@Body() addBookDTO: AddBookDTO): Promise<Book> {
        return this.bookService.create(addBookDTO)
    }

    @Delete(':id')
    removeBook(@Param('id') id): Promise<Book> {
        return this.bookService.remove(id);
    }

    @Put(':id') // this update status of loan/return book (but it works only with id, not name)
    updateStatus(@Body() addBookDTO: AddBookDTO, @Param('id') id): Promise<Book> {
        return this.bookService.updateStatus(id, addBookDTO);
    }

}
