export const TransactionItem = ({transactions}) =>{
  return (
     transactions.map(({id, type, amount, currency}) => {
return (

    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  
)
    })
  )
}