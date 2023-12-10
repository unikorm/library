import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import key from '../config/keys'

@Module({
  imports: [MongooseModule.forRoot(key.mongoURL), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

