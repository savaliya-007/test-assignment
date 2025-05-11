import mongoose from 'mongoose';
import { Account } from '../model/Account';
import { Transaction } from '../model/Transaction';

export async function transfer(
  fromId: string,
  toId: string,
  amount: number
) {
  const session = await mongoose.startSession();
  let txnDoc: any;
  await session.withTransaction(async () => {
    // Decrement sender balance
    const from = await Account.findByIdAndUpdate(
      fromId,
      { $inc: { balance: -amount } },
      { new: true, session }
    );
    // we are assuming that balance can be negative so not checking -> from.balance < 0
    if (!from ) throw new Error('Insufficient funds');

    // Increment recipient balance
    await Account.findByIdAndUpdate(
      toId,
      { $inc: { balance: amount } },
      { session }
    );

    // update transaction record
    txnDoc = await Transaction.create([
      { fromAccount: fromId, toAccount: toId, amount, timestamp: new Date() }
    ], { session });
  });
  session.endSession();
}