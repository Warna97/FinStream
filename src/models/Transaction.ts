// src/models/Transaction.ts
export interface Transaction {
    _id: string;
    accountId: string; // the account from which the transaction was made
    userId: string; // the user who initiated the transaction
    type: 'Credit' | 'Debit'; // type of transaction
    amount: number;
    description: string;
    status: 'Completed' | 'Pending' | 'Failed'; // Transaction status
    createdAt: Date;
  }
  