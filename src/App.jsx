import { useState, useEffect } from "react";
const App = () => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const savedOrderData = JSON.parse(localStorage.getItem("orderData"));
    if (Array.isArray(savedOrderData)) {
      setOrderData(savedOrderData);
    }
  }, []);

  const Alldata = (e) => {
    e.preventDefault();
    const data = { id, price, dish, table };
    const updatedOrderData = [...orderData, data];
    setOrderData(updatedOrderData);
    localStorage.setItem("orderData", JSON.stringify(updatedOrderData));
  };
  return (
    <>
      <form onSubmit={Alldata}>
        <label htmlFor="ID">Unique order Id:</label>
        <input
          type="number"
          id="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="price">Choose the price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="dish">Choose the dish:</label>
        <input
          type="text"
          id="dish"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />
        <label htmlFor="table">Choose the table:</label>
        <select
          id="table"
          name="Choose table no"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        >
          <option value="option1">Table 1</option>
          <option value="option2">Table 2</option>
          <option value="option3">Table 3</option>
        </select>
        <button type="submit">Add to bill</button>
      </form>
      <div>
        <h2>Order Data:</h2>
        <ul>
          {orderData.map((data, index) => (
            <li key={index}>
              Order {index + 1}: {JSON.stringify(data)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
