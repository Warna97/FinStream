// src/hooks/useTransactions.ts
import { useFetchData } from './useFetchData';
import { Transaction } from '../models/Transaction';

export const useTransactions = (accountId: string) => {
  const { data, loading, error } = useFetchData<Transaction[]>(`/api/accounts/${accountId}/transactions`);

  return {
    transactions: data,
    loading,
    error,
  };
};
