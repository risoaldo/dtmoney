import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImage from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from "../../services/api";

import { Container, TransactionContent, RadioButton } from "./styles";



interface ModalTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: ModalTransactionProps) {
  const [type, setType] = useState('deposit');
  const [tittle, setTittle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      tittle,
      value,
      type,
      category
    }

    api.post('/transactions', data)

  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h1>Nova Transação</h1>

        <input
          placeholder="Título"
          value={tittle}
          onChange={event => setTittle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionContent>
          <RadioButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Enreada" />
            <span>Entrada</span>
          </RadioButton>

          <RadioButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saidas" />
            <span>Saida</span>
          </RadioButton>

        </TransactionContent>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>


      </Container>
    </Modal>
  )
}