import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BasicTable(props) {

    function removeShipment() {
        props.removeShipment(shipment._id);
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ORDERNO</th>
                    <th>DELIVERYDATE</th>
                    <th>CUSTOMER</th>
                    <th>TRACKINGNO</th>
                    <th>STATUS</th>
                    <th>CONSIGNEE</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.shipments.map((shipment) => {
                    return (
                        <tr key={shipment._id}>
                            <td>{shipment.orderNo}</td>
                            <td>{shipment.date}</td>
                            <td>{shipment.customer}</td>
                            <td>{shipment.trackingNo}</td>
                            <td>{shipment.status}</td>
                            <td>{shipment.consignee}</td>
                            <td><Button variant="danger" onClick={removeShipment}>Delete</Button></td>
                        </tr>
                    )
                })

                }

            </tbody>
        </Table>
    );
}

export default BasicTable;