import React, { Component } from 'react'

 class Hornedbeasts extends Component {
    render() {
        return (
            <div>
              <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <h2>{this.props.keyword}</h2>
                <h3>{this.props.horns}</h3>
                <img src={this.props.imgUrl} style={{width: 150} }
/>

            </div>
        )
    }
}

export default Hornedbeasts
