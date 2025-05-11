import cron from 'node-cron';
import { config } from '../config';
import { distributedTransactions } from './transactionGenerator';
import { Account } from '../model/Account';

export function scheduleDailyTransactions(): void {
  cron.schedule(config.cronSchedule, async () => {
    try {
        
      const accounts = await Account.find().exec();
      await distributedTransactions(accounts);
      console.log(`[${new Date().toISOString()}] Completed inserting transactions`);
    } catch (err) {
      console.error('Error in daily transactions job:', err);
    }
  }, { timezone: 'Asia/Kolkata' });
}