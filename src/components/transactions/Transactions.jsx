import css from './Transaction.module.css'
import { TransactionItem } from "./TransactionItem";
export const Transactions = ({dataTransactions})=> {
    return (
        <table className={css.transaction_history}>
  <thead >
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