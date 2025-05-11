// const groupByTransData: {
//   [key: string]: number;
// } = {};

import { config } from "../config";
import { AccountDoc } from "../model/Account";
import { transfer } from "./saveTransaction";

export function distributedTransactions(accounts: AccountDoc[],  date = new Date()) {
  const n = accounts.length;
  // Determine even distribution
  const totalTransactions = config.totalTransactions; 
//   const base = Math.floor( totalTransactions/ n);
//   const remainder = totalTransactions % n;

  // rotate accounts daily so source/dest patterns shift over days
  const startIndex = Math.floor(date.getTime() / (1000 * 60 * 60 * 24)) % n;
  const rotated = accounts.slice(startIndex).concat(accounts.slice(0, startIndex));

  // Now assign each transaction T1…TtotalTransactions
  console.log(`-----------start date ${date.toDateString()}:  -----------`)
  for (let t = 1; t <= totalTransactions; t++) {
        const srcIdx = (t - 1) % n;
        const destIdx = (srcIdx + 1) % n;
        const from = rotated[srcIdx];
        const to   = rotated[destIdx];
        
        console.log(from.id, "------------>", to.id)
        transfer(String(from._id), String(to._id),1)
    }
    console.log("------------------- End of tranaction ---------------------")   
}

