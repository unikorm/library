
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { Loan, LoanSchema } from './schemas/loan.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Loan.name, schema: LoanSchema }])],
    controllers: [LoansController],
    providers: [LoansService],
    exports: [LoansService]  // it is used in book service to delete book with loan records at one time
})
export class LoansModule {}
