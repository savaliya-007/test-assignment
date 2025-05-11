import { AccountDoc } from "../model/Account";
import { distributedTransactions } from "../service/transactionGenerator";

// exp usage
const accounts = [{
    id: "a1",
  balance: 0,
  createdAt: new Date(),
  updatedAt:new Date()

} as AccountDoc]

function getNextDateFromIndex(ind = 0){
    const today = new Date();
    const next = new Date(today);
    next.setDate(today.getDate() + ind);
    return next    
}

// test loop
for(let i = 0;i < 30;i++){
    distributedTransactions(accounts,  getNextDateFromIndex(i));
}