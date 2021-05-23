import { Container, Content } from "./styles";
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dtmoney" />
        <button type="submit">
          Nova Transação
      </button>
      </Content>
    </Container>
  )
}