import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
import Products from './Products'
import hornsData from './hornsData.json'
import {  Row } from 'react-bootstrap';
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
                        // handelmodal={this.props.handelmodal}
                    />
           
                    ) 
                })
            }
            </Row>
        )
    }
}
export default Main
