import { ObjectId } from "mongoose";

export class AddLoanDTO {
    readonly book: ObjectId;
    readonly when: string;
    readonly status: boolean;
}