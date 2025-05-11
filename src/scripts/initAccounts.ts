import mongoose from 'mongoose';
import { config } from '../config';
import { Account } from '../model/Account';

async function initAccounts(): Promise<void> {
  try {
    await mongoose.connect(config.dbUri);
    console.log('🔗 MongoDB connected');

    const existing = await Account.find().exec();
    console.log('ee 11',existing)
    const names = config.accountIds;
    const toCreate = names.filter(name => !existing.some(acc => acc.id === name));

    if (toCreate.length === 0) {
      console.log('All accounts already exist.');
    } else {
      const docs = toCreate.map(name => ({ id:name,balance:0 }));
      await Account.insertMany(docs);
      console.log(`Created ${docs.length} accounts.`);
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ initAccounts error:', err);
    process.exit(1);
  }
}

initAccounts();