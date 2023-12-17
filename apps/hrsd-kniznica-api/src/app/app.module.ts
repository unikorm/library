
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { LoansModule } from './loans/loans.module';
import key from '../config/keys';

@Module({
  imports: [MongooseModule.forRoot(key.mongoURL), BooksModule, LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
