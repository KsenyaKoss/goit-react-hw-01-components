
import { TransactionItem } from "./TransactionItem";
export const Transactions = ({dataTransactions})=> {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
 <TransactionItem transactions={dataTransactions}/>
  </tbody>
</table>

    )
}