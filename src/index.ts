import mongoose from 'mongoose';
import { config } from './config';
import { scheduleDailyTransactions } from './service/dailyTransactions';

async function bootstrap(): Promise<void> {
  try {
    await mongoose.connect(config.dbUri);
    console.log('🔗 MongoDB connected');
    scheduleDailyTransactions();
  } catch (err) {
    console.error('❌ DB connection error:', err);
    process.exit(1);
  }
}

bootstrap();