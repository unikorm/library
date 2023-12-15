import { Date, ObjectId } from "mongoose";

export class AddLoanDTO {
    readonly book: ObjectId;
    readonly when: Date;
    readonly status: boolean;
}