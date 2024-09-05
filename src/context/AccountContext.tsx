// src/context/AccountContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccountContextProps {
  account: any | null;
  balance: number;
  refreshAccountData: () => void;
  loading: boolean;
}

const AccountContext = createContext<AccountContextProps | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<any | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAccountData = async () => {
    try {
      const res = await fetch('/api/accounts/current');
      const data = await res.json();
      setAccount(data.account);
      setBalance(data.balance);
    } catch (error) {
      setAccount(null);
      setBalance(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  const refreshAccountData = () => {
    setLoading(true);
    fetchAccountData();
  };

  return (
    <AccountContext.Provider value={{ account, balance, refreshAccountData, loading }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
};
