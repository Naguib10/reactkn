import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function ViewShipment(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={6} md={6}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={6}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={6} md={6}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={6}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={6} md={6}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function App() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                View
            </Button>

            <ViewShipment show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default App;