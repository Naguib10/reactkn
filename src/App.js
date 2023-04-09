import { useDispatch } from 'react-redux';
import './App.css';
import Table from './components/Table';
import { useEffect } from 'react';
import { getShipments } from './redux/shipments';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShipments());
  }, [dispatch])


  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
