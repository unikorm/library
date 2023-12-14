
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Loan } from './schemas/loan.schema';
import { AddLoanDTO } from './DTO/add-loan.dto';

@Injectable()
export class LoansService {

    constructor(@InjectModel(Loan.name) private readonly loanModel: Model<Loan>) {}

    async findLoanRecords(bookId: string): Promise<Loan[]> {
        return await this.loanModel.find({ book: bookId }).exec();
    }

    async createLoan(addLoanDTO: AddLoanDTO): Promise<Loan> {
        const { book } = addLoanDTO;
        const newLoan = await this.loanModel.create({ book: book });
        return newLoan;
    }

}
