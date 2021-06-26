
import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
import { Row } from 'react-bootstrap';
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.x = this.props.dataParentToChild
        return (
            <Row>{
                this.x.map(i => {
                    return (
                        <Hornedbeasts
                            imgUrl={i.image_url}
                            title={i.title}
                            description={i.description}
                            horns={i.horns}
                            keyword={i.keyword}
                        />
                    )
                } )
            }
            </Row >)
    }
}
export default Main

