import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
class Modalhorned extends Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handelmodal() {
        this.setState({ show: !this.state.show })
    }
    render() {

        return (
            <>
                {/* <Button onClick={() => { this.handelmodal() }}>open Modal</Button>
                <Modal show={this.state.show} onHide={() => this.handelmodal()}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title></Modal.Header>
                    <Modal.Body></Modal.Body>
                    <Modal.Footer><Button onClick={() => { this.handelmodal() }}>close Modal</Button></Modal.Footer>
                </Modal> */}

            </>
        )
    }
}
export default Modalhorned
