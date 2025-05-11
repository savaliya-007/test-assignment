import 'dotenv/config';

export interface Config {
  dbUri: string;
  totalTransactions: number;
  workStartHour: number;
  workEndHour: number;
  cronSchedule: string;
  accountIds: string[]
}

const accountsConfig = [
  'Test_232323344444444444441','Test_232323344444444444442','Test_232323344444444444443',
  'Test_232323444444444444444','Test_232323444444444444445','Test_232323444444444444446',
  'Test_232323444444444444447','Test_232323444444444444448','Test_232323444444444444449',
  'Test_232323444444444444410','Test_232323444444444444411','Test_232323444444444444412',
  'Test_232323444444444444413'
];
export const config: Config = {
  dbUri: process.env.MONGODB_URI as string,
  totalTransactions: Number(process.env.TOTAL_TXNS) || 180,
  workStartHour: Number(process.env.WORK_START) || 9,
  workEndHour: Number(process.env.WORK_END) || 17,
  cronSchedule: process.env.CRON_SCHEDULE || '0 9 * * *',
  accountIds:accountsConfig
};
