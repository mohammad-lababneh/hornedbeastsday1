import React, { Component } from 'react'
import { Card, Button, Col, Spinner, Modal } from 'react-bootstrap';
class Hornedbeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galary: 0
            // show:0
        }
    }
    increaseClick = () => {
        this.setState(
            {
                galary: this.state.galary + 1
            })
    }

    clickme = () => {

        let data = {
            title:this.props.title,
            img_url:this.props.img_url,
            description:this.props.description,
         
        }
        this.props.showModal(data)

console.log(data);
    }

    render() {

        // console.log(this.props)
        return (
            <Col sm={3}>
                <Card bg={'warning '}>
                    <Card.Img variant="top" src={this.props.img_url} style={{ width: 250 }} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text> {this.props.description} </Card.Text>
                        <Card.Text> {this.props.keyword} </Card.Text>
                        <Card.Text> {this.props.horns} </Card.Text>
                        <Card.Text> {this.state.galary} </Card.Text>
                        {/* <Spinner animation="grow" variant="secondary" /> */}
                    </Card.Body>
                    <Button variant="primary" onClick={this.increaseClick}>💛</Button>
                        <Button variant="primary" onClick={this.clickme()}>Click Me</Button>
                </Card>
            </Col>
        )
    }
}

export default Hornedbeasts
