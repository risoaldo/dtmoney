import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>R$5000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="saidas" />
        </header>
        <strong>R$7000,00</strong>
      </div>

    </Container>
  )
}