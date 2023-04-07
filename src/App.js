import './App.css';
import Table from './components/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [shipments, setShipments] = useState([]);

  async function fetchData() {
    try {
      //Online
      //const response = await axios.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0"); 

      //Offline
      const response = await axios.get("shipments.js");

      //Adding id to shipments to be able to delete after editing a shipment
      response.data.forEach((item, i) => {
        item._id = i + 1;
      });

      setShipments(response.data);

    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  function removeShipment(removedShipment) {
    setShipments((prev) => prev.filter((shipment) => shipment._id !== removedShipment));
  }

  return (
    <div className="App">
      <Table shipments={shipments} removeShipment={removeShipment} />
    </div>
  );
}

export default App;
