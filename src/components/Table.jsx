import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import { useSelector } from 'react-redux';

function BasicTable() {

    const shipments = useSelector((state) => state.shipments);

    return (
        <Table hover size="sm">
            <thead className="table-success">
                <tr>
                    <th>ORDERNO</th>
                    <th>DELIVERYDATE</th>
                    <th>CUSTOMER</th>
                    <th>TRACKINGNO</th>
                    <th>STATUS</th>
                    <th>CONSIGNEE</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {shipments.shipments.map((shipment) => {
                    return (
                        <TableRow key={shipment._id} shipment={shipment} />
                    )
                })}

            </tbody>
        </Table>
    );
}

export default BasicTable;