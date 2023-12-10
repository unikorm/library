
import { Controller, Get, Post, Delete, Put,  Body, Param } from '@nestjs/common';

import { AddBookDTO } from './DTO/add-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Get()
    allBooks(): Book[] {
        return this.bookService.findAll();
    }

    @Get(':id')
    bookById(@Param('id') id): string {
        return `book of ${id}`;
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
