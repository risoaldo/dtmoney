import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  tittle: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt' >

interface TransactionContexData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContexData>(
  {} as TransactionContexData
);


export function TransactionsProvider({ children }:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction( transactionInput: TransactionInput ){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return(
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}