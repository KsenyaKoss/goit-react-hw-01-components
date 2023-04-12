import css from './Transaction.module.css';
import { TransactionItem } from './TransactionItem';
import PropTypes from 'prop-types';

export const Transactions = ({ dataTransactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {dataTransactions.map(transaction => {
          return (
            <TransactionItem transaction={transaction} key={transaction.id} />
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  dataTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
