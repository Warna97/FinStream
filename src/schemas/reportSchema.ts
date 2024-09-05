// src/schemas/reportSchema.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IReport extends Document {
  userId: mongoose.Types.ObjectId;
  reportType: 'Revenue' | 'Expense' | 'Balance';
  startDate: Date;
  endDate: Date;
  generatedAt: Date;
  data: Record<string, any>;
}

const reportSchema: Schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reportType: { type: String, enum: ['Revenue', 'Expense', 'Balance'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  generatedAt: { type: Date, default: Date.now },
  data: { type: Map, of: Schema.Types.Mixed, required: true }, // Flexible data structure
});

export default mongoose.models.Report || mongoose.model<IReport>('Report', reportSchema);
