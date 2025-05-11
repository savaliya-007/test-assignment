import cron from 'node-cron';
import { config } from '../config';
import { distributedTransactions } from './transactionGenerator';

export function scheduleDailyTransactions(): void {
  cron.schedule(config.cronSchedule, async () => {
    try {
      await distributedTransactions();
      console.log(`[${new Date().toISOString()}] Completed inserting transactions`);
    } catch (err) {
      console.error('Error in daily transactions job:', err);
    }
  }, { timezone: 'Asia/Kolkata' });
}