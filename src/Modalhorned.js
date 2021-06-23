import React, { Component } from 'react'
import hornsData from './hornsData.json'
import Main from './Main';

import Hornedbeasts from './Hornedbeasts'
import { Modal, Button, closeButton, Row } from 'react-bootstrap';
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

            <Modal show={this.state.show} onHide={() => this.handelmodal()}>
            <Button onClick={() => { this.handelmodal() }}>open Modal</Button>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title></Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer><Button onClick={() => { this.handelmodal() }}>close Modal</Button></Modal.Footer>
            </Modal>


        )
    }
}
export default Modalhorned
