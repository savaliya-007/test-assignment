import 'dotenv/config';

export interface Config {
  dbUri: string;
  totalTransactions: number;
  workStartHour: number;
  workEndHour: number;
  cronSchedule: string;
}

export const config: Config = {
  dbUri: process.env.MONGODB_URI as string,
  totalTransactions: Number(process.env.TOTAL_TXNS) || 180,
  workStartHour: Number(process.env.WORK_START) || 9,
  workEndHour: Number(process.env.WORK_END) || 17,
  cronSchedule: process.env.CRON_SCHEDULE || '0 9 * * *'
};