import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cachaça</td>
            <td className="witdraw">R$747,4</td>
            <td>Pinga</td>
            <td>14/5/99</td>
          </tr>
          <tr>
            <td>Cachaça</td>
            <td className="deposit">R$747,4</td>
            <td>Pinga</td>
            <td>14/5/99</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}