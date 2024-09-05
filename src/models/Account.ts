// src/models/Account.ts
export interface Account {
    _id: string;
    userId: string; // the user to whom the account belongs
    accountType: 'Savings' | 'Checking' | 'Business'; // Account types
    balance: number; // Current balance
    createdAt: Date;
    updatedAt: Date;
  }
  