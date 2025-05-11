import { Schema, model, Document } from 'mongoose';

export interface AccountDoc extends Document {
  id: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

const accountSchema = new Schema<AccountDoc>(
  {
    id:    { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

export const Account = model<AccountDoc>('Account', accountSchema);
