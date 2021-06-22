import React, { Component } from 'react'
import { NavItem } from 'reactstrap'
import Hornedbeasts from './Hornedbeasts'
import hornsData from './hornsData.json'
import { Card, Button, Col, Row } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal"; 
// import React from 'react';
// import { Button } from 'reactstrap';
class Main extends Component {
    // const printImages=()
    render() {
        return (
            <Row>{
            hornsData.map((item) => {
                return <Hornedbeasts
                        imgUrl={item.image_url}
                        title={item.title}
                        description={item.description}
                        keyword={item.keyword}
                        horns={item.horns} />
            })
        }
             </Row>
        )  
      
    }
}

export default Main
