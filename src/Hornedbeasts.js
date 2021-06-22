import React, { Component } from 'react'

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
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <h2>{this.props.keyword}</h2>
                <h3>{this.props.horns}</h3>
                <img src={this.props.imgUrl} style={{ width:250 }}  />
                <h3>{this.state.galary}</h3>
 <button onClick={this.increaseClick} style={{ borderRadius: 8 }}>increaseClick</button>
            </div>
        )
    }
}

export default Hornedbeasts
