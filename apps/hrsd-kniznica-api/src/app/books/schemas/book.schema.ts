
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: true })
  status: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);