import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import EditShipment from './EditShipment';
import ConfirmDel from './ConfirmDel';

function TableRow(props) {

    const [shipment, setShipment] = useState({
        orderNo: props.shipment.orderNo,
        date: props.shipment.date,
        customer: props.shipment.customer,
        trackingNo: props.shipment.trackingNo,
        status: props.shipment.status,
        consignee: props.shipment.consignee,
        _id: props.shipment._id
    })

    function updateDetails(updatedShipment) {
        setShipment(updatedShipment);
    }

    function removeShipment() {
        props.removeShipment(shipment._id);
    }

    return (
        <tr key={shipment._id}>
            <td>{shipment.orderNo}</td>
            <td>{shipment.date}</td>
            <td>{shipment.customer}</td>
            <td>{shipment.trackingNo}</td>
            <td>{shipment.status}</td>
            <td>{shipment.consignee}</td>
            <td><EditShipment shipment={shipment} update={updateDetails} /></td>
            <td><ConfirmDel shipment={shipment} remove={removeShipment} /></td>
        </tr>
    )
}

export default TableRow;
