const groupByTransData = {}

function distributedTransactions(accounts, totalTransactions, date = new Date()) {
  const n = accounts.length;
  // Determine even distribution 
  const base = Math.floor(totalTransactions / n);
  const remainder = totalTransactions % n;

  // rotate accounts daily so source/dest patterns shift over days
  const startIndex = Math.floor(date.getTime() / (1000 * 60 * 60 * 24)) % n;
  const rotated = accounts.slice(startIndex).concat(accounts.slice(0, startIndex));

  // Now assign each transaction T1…TtotalTransactions
  for (let t = 1; t <= totalTransactions; t++) {
    // Source index in [0…n-1]
    const srcIdx = (t - 1) % n;
    // Destination index—for “next account” use (srcIdx + 1) % n
    const destIdx = (srcIdx + 1) % n;

    const from = rotated[srcIdx];
    const to   = rotated[destIdx];
    if(to in groupByTransData){
        groupByTransData[to]++
    }else{
        groupByTransData[to] = 1
    }
    
//   console.log(startIndex, data,)
    // console.log(`T${t} : From ${from} to ${to}`);
  }
     console.log(date, groupByTransData)
  
}

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