
import { Controller, Get, Post, Delete, Put,  Body, Param } from '@nestjs/common';

import { AddBookDTO } from './DTO/add-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Get()  // this will be on getting all books on list of books
    async allBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':name')  // this will be on getting separate book when user click on about 
    async bookByName(@Param('name') name): Promise<Book> {
        return this.bookService.findOne(name)
    }

    @Post()
    addBook(@Body() addBookDTO: AddBookDTO): string {
        return `Name ${addBookDTO.name}, and author ${addBookDTO.author}`;
    }

    @Delete(':id')
    removeBook(@Param('id') id): string {
        return `remove book ${id}`;
    }

    @Put(':id')
    updateStatus(@Body() addBookDTO: AddBookDTO, @Param('id') id): string {
        return `update ${id} book ${addBookDTO.name}`;
    }

}
