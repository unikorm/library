import { ObjectId } from "mongoose";

export class AddLoanDTO {
    readonly book: ObjectId;
    readonly time: Date;
    readonly status: boolean;
}