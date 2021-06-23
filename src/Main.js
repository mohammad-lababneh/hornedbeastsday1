import React, { Component } from 'react'
import { NavItem } from 'reactstrap'
import Hornedbeasts from './Hornedbeasts'
import hornsData from './hornsData.json'
import Modalhorned from './Modalhorned'
import { Card, Button, Col, Row } from 'react-bootstrap';
class Main extends Component {
    render() {
        return (
            <Row>{
                hornsData.map((item) => {
                    return (<Hornedbeasts
                        imgUrl={item.image_url}
                        title={item.title}
                        description={item.description}
                        keyword={item.keyword}
                        horns={item.horns}
                    />)
                })
            }
            </Row>
        )
    }
}
export default Main
