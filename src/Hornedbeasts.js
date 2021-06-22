import React, { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap';
class Hornedbeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galary: 0
        }
    }
    increaseClick = () => {
        this.setState(
            {
                galary: this.state.galary + 1
            })
    }
    render() {
        // console.log(this.state.galary)
        console.log(this.props)
        return (
            <Col sm={3}>
                <Card bg={'warning '}>
                    <Card.Img variant="top" src={this.props.imgUrl} style={{ width: 250 } }  />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text> {this.props.description} </Card.Text>
                        <Card.Text> {this.props.keyword} </Card.Text>
                        <Card.Text> {this.props.horns} </Card.Text>
                        <Card.Text> {this.state.galary} </Card.Text>
                        <Button variant="primary" onClick={this.increaseClick}>💛</Button>
                    </Card.Body>
                </Card>
            </Col>
            // <div style={{ height:600  }, {margin:15}}>
            //     <h1>{this.props.title}</h1>
            //     <p>{this.props.description}</p>
            //     <h2>{this.props.keyword}</h2>
            //     <h3>{this.props.horns}</h3>
            //     <img src={this.props.imgUrl}  style={{ width:250 }}  />
            //     <h3>{this.state.galary}</h3>
            //     <span onClick={this.increaseClick} style={{ height:250 }}>
            //     💛</span>
            // </div>
        )
    }
}

export default Hornedbeasts
