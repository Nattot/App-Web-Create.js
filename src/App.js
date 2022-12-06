import './App.css';

import Data from './viewData.json';

Data.sort((a, b) => {
  return new Date(a.transactionDate) - new Date(b.transactionDate); // ascending
})

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Amount</th>
          <th>Customer Name</th>
          <th>Status</th>
          <th>Transaction Date</th>
          <th>Created By</th>
          <th>Created On</th>
        </tr>
      {
        Data && Data.map( Data => {
          return(
            <tr>
              <td>{Data.id}</td>
              <td>{Data.productID}</td>
              <td>{Data.productName}</td>
              <td>{Data.amount}</td>
              <td>{Data.customerName}</td>
              <td>{Data.status}</td>
              <td>{Data.transactionDate}</td>
              <td>{Data.createBy}</td>
              <td>{Data.createOn}</td>
            </tr>
          )
        })
        }
        </table>
    </div>
  );
}

export default App;
