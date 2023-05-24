import { useState } from "react";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    // setCustomers([...customers, newCustomer]);
    setCustomers((prevState) => [newCustomer, ...prevState]);
  };

  return (
    <div className="App">
      <h1>Customer Manage System</h1>

      {customers.length === 0 && "There are no customers..."}
    </div>
  );
}

export default App;
