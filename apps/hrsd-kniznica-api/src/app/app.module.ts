import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import key from '../config/keys'
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

@Module({
  imports: [BooksModule, MongooseModule.forRoot(key.mongoURL)],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}

