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
      <h2>Frontend Option 2</h2>
      <p> Please note that this is the <b>"React + Redux + Thunk"</b> option. For the <b>"React only"</b> option please check the <b>main</b> branch on the github repository</p>
      <Table />
    </div>
  );
}

export default App;
