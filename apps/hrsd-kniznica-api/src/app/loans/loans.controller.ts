
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

import { AddLoanDTO } from './DTO/add-loan.dto';
import { LoansService } from './loans.service';
import { Loan } from './schemas/loan.schema';

@Controller('loans')
export class LoansController {

    constructor(private readonly loansService: LoansService) {};  // LoanService

    @Get(':bookId')
    async getLoanRecords(@Param('bookId') bookId: string): Promise<Loan[]> {
        return this.loansService.findLoanRecords(bookId);
    }

    @Post()
    async create(@Body() addLoanDTO: AddLoanDTO): Promise<Loan> {
        return this.loansService.createLoan(addLoanDTO)
    }

}
