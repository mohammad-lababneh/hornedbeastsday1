import React, { Component } from 'react'
import { NavItem } from 'reactstrap'
import Hornedbeasts from './Hornedbeasts'
import hornsData from './hornsData.json'
// import React from 'react';
// import { Button } from 'reactstrap';
class Main extends Component {




    // const printImages=()
    render() {


        return (
            <div>

                {

                    hornsData.map((item) => {
                        return <div>

                            <Hornedbeasts 
                           
                           imgUrl = {item.image_url}
                            title={item.title} 
                             description={item.description}
                             keyword = {item.keyword}
                             horns = {item.horns} />
                            {/* <Hornedbeasts  /> */}
                            {/* <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.keyword}</p>
                            <p>{item.horns}</p>
                            <img onClick={this.react} src={item.image_url} style={
                                { width: 300 }} />
                                {/* <span>{this.state.onClick}</span> */}
                            {/* <h1>{this.state.galary}</h1> */}
                            {/* <button onClick={this.react} style={{ borderRadius: 8 }}>React</button> */}
                        </div>
                    })
                }

                {/* <Button/> */}

            </div >
        )
    }
}

export default Main
