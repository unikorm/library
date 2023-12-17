
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

import { AddLoanDTO } from './DTO/add-loan.dto';
import { LoansService } from './loans.service';
import { Loan } from './schemas/loan.schema';

@Controller('loans')
export class LoansController {

    constructor(private readonly loansService: LoansService) {};

    @Get(':bookId')  // get all loan records of book from database 
    async getLoanRecords(@Param('bookId') bookId: string): Promise<Loan[]> {
        return this.loansService.findLoanRecords(bookId)
    }

    @Post()  // post new record loan/return
    async create(@Body() addLoanDTO: AddLoanDTO): Promise<Loan> {
        return this.loansService.createLoan(addLoanDTO)
    }

    @Delete(':bookId')  // when book is deleted, all the loan records will be too
    async deleteRecords(@Param('bookId') bookId: string): Promise<void> {
        return this.loansService.removeLoanRecords(bookId)
    }
}
