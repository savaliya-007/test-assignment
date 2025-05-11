import { Schema, model, Document, Types } from 'mongoose';

export interface TransactionDoc extends Document {
  toAccount: Types.ObjectId;
  amount: number;
  timestamp: Date;
  fromAccount: Types.ObjectId
}

const transactionSchema = new Schema<TransactionDoc>(
  {
    toAccount:   { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    fromAccount:   { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    amount:    { type: Number, required: true },
    timestamp: { type: Date,   required: true }
  },
  { timestamps: true }
);

export const Transaction = model<TransactionDoc>('Transaction', transactionSchema);
