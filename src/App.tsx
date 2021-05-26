import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
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
    <>
      <Header onPenNewTransactionModal={handleNewTransactionModalOpen} />

      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
      <GlobalStyle />
    </>
  );
}
