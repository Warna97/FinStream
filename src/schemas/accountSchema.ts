// src/schemas/accountSchema.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAccount extends Document {
  userId: mongoose.Types.ObjectId;
  accountType: 'Savings' | 'Checking' | 'Business';
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

const accountSchema: Schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountType: { type: String, enum: ['Savings', 'Checking', 'Business'], required: true },
  balance: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Account || mongoose.model<IAccount>('Account', accountSchema);
