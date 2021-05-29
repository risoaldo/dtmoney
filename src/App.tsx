import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModalOpen() {
    setNewTransactionModalOpen(true);
  }

  function handleNewTransactionModalClose() {
    setNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onPenNewTransactionModal={handleNewTransactionModalOpen} />

      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
