
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

import { Book } from '../../books/schemas/book.schema';

export type LoanDocument = HydratedDocument<Loan>;

@Schema()
export class Loan {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Book })
    book: ObjectId;

    @Prop({ required: true, type: Date })
    time: Date;

    @Prop({ required: true })
    status: boolean;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);