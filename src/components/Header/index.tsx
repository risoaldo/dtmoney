import { Container, Content } from "./styles";

import logo from '../../assets/logo.svg';


interface HeaderProps{
  onPenNewTransactionModal: () => void;
}
export function Header({ onPenNewTransactionModal }:HeaderProps) {

  return (
    <Container>

      <Content>
        <img src={logo} alt="dtmoney" />
        <button
        type="submit"
        onClick={onPenNewTransactionModal}
        >
          Nova Transação
      </button>
      </Content>
    </Container>
  )
}