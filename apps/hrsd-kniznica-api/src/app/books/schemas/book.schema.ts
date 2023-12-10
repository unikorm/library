
import * as mongoose from '@nestjs/mongoose';

export const BookSchema =  new mongoose.Schema({
    name: String,
    author: String,
    description: String,
  });