# ASSIGNMENT 

Let’s assume we have 13 bank accounts; we like to create total 180 payment transaction using these accounts in our database daily. All the accounts should have equal number of transactions as much as possible for the day. All the transactions should be done in day/working hours of the day. 

Please write Node js code to achieve given goal/feature.  

(No UI, only Node & MongoDB code) 

```  

[{ 
   Account : 'Test_232323344444444444441' 
 },{ 
   Account : 'Test_232323344444444444442' 
 },{ 
   Account : 'Test_232323344444444444443' 
 },{ 
   Account : 'Test_232323344444444444444' 
 },{ 
   Account : 'Test_232323344444444444445' 
 },{ 
   Account : 'Test_232323344444444444446' 
 },{ 
   Account : 'Test_232323344444444444447' 
 },{ 
   Account : 'Test_232323344444444444448' 
 }{ 
   Account : 'Test_232323344444444444449' 
 }{ 
   Account : 'Test_232323344444444444410' 
 },{ 
   Account : 'Test_232323344444444444411' 
 }{ 
   Account : 'Test_232323344444444444412' 
 }{ 
   Account : 'Test_232323344444444444413' 
 }] 

 ```

 # Set-up

 ### To install all deps 
 ```
 pnpm install 
 ```
 or
 ```
 npm install
 ```
### To Seed the DB with 13 Accounts  
 ``` 
 pnpm seed:db 
 ```
 or
 ```
 npm seed:db
 ```

 ### To Start app 
 ``` 
 pnpm start 
 ```
 or
 ```
 npm start
 ```




 # About

A production-ready Node.js + TypeScript + ES module application designed to:

* Seed 13 dummy bank accounts in MongoDB
* Schedule a daily job that evenly distributes and creates 180 payment transactions across those accounts during working hours
* Provide an atomic `transfer` function to debit/credit two accounts and log a transaction in a single MongoDB transaction session


---

## Assumptions

* **13 Accounts**: there is 13 account only
* **Daily Total**: The system generates exactly 180 transactions per day.
* **Working Hours**: Transactions are timestamped between 9:00 and 17:00 local time (Asia/Kolkata).
* **Even Distribution**: Transactions are as evenly distributed as possible across all accounts (180 % 13 ≠ 0).
* **Atomicity**: The `transfer` service uses MongoDB sessions to ensure both balances and the transaction log are updated atomically.
* **Environment**: Node.js v18+, MongoDB v4.0+  (for transactions), TypeScript 4.x.

---

## Getting Started

1. **Clone the repo**

   ```bash
   git clone  https://github.com/savaliya-007/test-assignment.git
   cd test-assignment
   ```

---

## Project Structure

```
├── tsconfig.json
├── package.json
├── .env
├── src
│   ├── config
│   │   └── index.ts       # Loads and exports typed config
│   ├── model
│   │   ├── Account.ts     # Account schema
│   │   └── Transaction.ts # Transaction schema
│   ├── service
│   │   ├── saveTransactions.ts       # Atomic transfer logic
│   │   └── transactionGenerator.ts # Generate & insert daily txns
|   |   |__ dailyTransactions.ts
│   ├── scripts
│   │   └── initAccounts.ts         # Seed accounts
|   |   |__ testData.ts
│   └── index.ts                    # Bootstrap & scheduler launch
└── dist                           # Compiled output
```

---

## Configuration

All runtime settings live in **.env** and `src/config/index.ts`:

| Variable       | Default             | Description                                      |
| -------------- | ------------------- | ------------------------------------------------ |
| MONGODB\_URI   | mongodb://localhost | MongoDB connection URI                           |
| TOTAL\_TXNS    | 180                 | Number of transactions to generate per day       |
| WORK\_START    | 9                   | Start hour for timestamps (24h format)           |
| WORK\_END      | 17                  | End hour for timestamps                          |
| CRON\_SCHEDULE | 0 9 \* \* \*        | Cron expression for daily job (default 9 AM IST) |

---

---



