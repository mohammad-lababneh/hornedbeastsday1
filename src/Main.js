import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
import hornsData from './hornsData.json'
// import React from 'react';
// import { Button } from 'reactstrap';
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            galary: 0
        }
    }

    react = () => {
        this.setState(
            {
                galary: this.state.galary + 1
            })
    }
    // const printImages=()
    render() {
        console.log(typeof this.state.galary);
        console.log(this.state)

        return (
            <div>

                {
                    hornsData.map((item) => {
                        return <div>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.keyword}</p>
                            <p>{item.horns}</p>
                            <img src={item.image_url} style={
                                { width: 300 }} />
                            <h1>{this.state.galary}</h1>
                            <button onClick={this.react} style={{ borderRadius: 8 }}>React</button>
                        </div>
                    })
                }
                <hornsData />
                <Hornedbeasts/>
                {/* <Button/> */}

            </div >
        )
    }
}

export default Main
