// src/models/Report.ts
export interface Report {
    _id: string;
    userId: string; // User who requested or generated the report
    reportType: 'Revenue' | 'Expense' | 'Balance'; // Different types of reports
    startDate: Date; // The start date for the report
    endDate: Date; // The end date for the report
    generatedAt: Date; // When the report was generated
    data: Record<string, any>; // Flexible data structure for storing report data
  }
  