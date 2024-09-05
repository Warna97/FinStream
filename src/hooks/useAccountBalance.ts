// src/hooks/useAccountBalance.ts
import { useState, useEffect } from 'react';

export const useAccountBalance = (accountId: string) => {
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await fetch(`/api/accounts/${accountId}/balance`);
        if (res.ok) {
          const data = await res.json();
          setBalance(data.balance);
        } else {
          throw new Error('Failed to fetch balance');
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [accountId]);

  return { balance, loading, error };
};
