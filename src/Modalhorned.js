import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal,Card } from 'react-bootstrap';
// import { Card } from 'reactstrap';
export class Modalhorned extends Component {


    render() {
        return (

            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch static backdrop modal
                </Button> */}

                <Modal
                    show={this.props.showdata}
                    onHide={this.props.showdata}
                    backdrop="static"
                    keyboard={this.props.showdata}
                >
                    <Modal.Header >
                        <Modal.Title>{this.props.modaldata.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Img src={this.props.modaldata.img_url} alt={this.props.title} />
                            <Card.Body>
                                <Card.Text >
                                    {this.props.modaldata.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.handleExit}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }



}


export default Modal
