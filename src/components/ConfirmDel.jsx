import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteShipment } from '../redux/shipments';

function ConfirmDel(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    function removeShipment() {
        dispatch(deleteShipment(props.shipment._id));
        handleClose();
    }

    return (
        <>
            <Button variant="outline-danger btn-sm" onClick={handleShow}>
                Del
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Are you sure you want to delete shipment {props.shipment.orderNo}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={removeShipment}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmDel;