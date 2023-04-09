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
      <h2>Frontend Option 1</h2>
      <p> Please note that this is the <b>"React only"</b> option. For the <b>"React + Redux + Thunk"</b> option please check the <b>redux</b> branch on the github repository</p>
      <Table shipments={shipments} removeShipment={removeShipment} />
    </div>
  );
}

export default App;
