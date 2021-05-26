import Modal from "react-modal";

import closeImage from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionContent } from "./styles";



interface ModalTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: ModalTransactionProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
      type="submit"
      onClick={onRequestClose}
      className="close-modal"
      >
        <img src={closeImage} alt="fechar modal" />
      </button>

      <Container>
      <h1>Nova Transação</h1>

      <input placeholder="Título" />

      <input type="number" placeholder="Valor" />

      <TransactionContent>
        <button type="button">
          <img src={incomeImg} alt="Enreada" />
          <span>Entrada</span>
        </button>

        <button type="button">
          <img src={outcomeImg} alt="Saidas" />
          <span>Saida</span>
        </button>

      </TransactionContent>

      <input placeholder="Categoria" />

      <button type="submit">Cadastrar</button>


      </Container>
    </Modal>
  )
}