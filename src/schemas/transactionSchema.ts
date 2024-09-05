// src/schemas/transactionSchema.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  accountId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  type: 'Credit' | 'Debit';
  amount: number;
  description: string;
  status: 'Completed' | 'Pending' | 'Failed';
  createdAt: Date;
}

const transactionSchema: Schema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['Credit', 'Debit'], required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Completed', 'Pending', 'Failed'], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', transactionSchema);
