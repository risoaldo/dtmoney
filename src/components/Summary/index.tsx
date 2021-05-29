import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions();

  const summary = transactions.reduce( (acc, transactions) => {
    if(transactions.type === 'deposit'){
      acc.deposits += transactions.amount;
      acc.total += transactions.amount;
    }else {
      acc.witdraws += transactions.amount;
      acc.total -= transactions.amount;
    }

    return acc;

  },{
    deposits: 0,
    witdraws: 0,
    total: 0
  } );

  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>
          { new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>
          { new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.witdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="saidas" />
        </header>
        <strong>
          { new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>

    </Container>
  )
}