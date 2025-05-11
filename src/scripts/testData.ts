import { distributedTransactions } from "../service/transactionGenerator";

// exp usage
const accounts = [
  'A1','A2','A3','A4','A5','A6','A7',
  'A8','A9','A10','A11','A12','A13'
];

function getNextDateFromIndex(ind = 0){
    const today = new Date();
    const next = new Date(today);
    next.setDate(today.getDate() + ind);
    return next    
}

// test loop
for(let i = 0;i < 30;i++){
    distributedTransactions(accounts, 180, getNextDateFromIndex(i));
}