import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
import Products from './Products'
import hornsData from './hornsData.json'
import { Row } from 'react-bootstrap';
class Main extends Component {


    constructor(props) {

        super(props);
        debugger
    }


    render() {

        this.x = this.props.dataParentToChild
        return (
            <Row>{
                this.x.map(i => {



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



                })
            }
            </Row>
        )
    }
}
export default Main



/////////////////////

// import React, { Component } from 'react'
// import Hornedbeasts from './Hornedbeasts'
// // import hornsData from './hornsData'
// import { Row } from 'react-bootstrap';
// // import { Button } from 'reactstrap';
// class Main extends Component {
//     constructor(props) {

//         super(props);
//         debugger
//     }

//     render() {
//         this.x = this.props.dataParentToChild

//         // console.log(typeof this.state.galary);
//         // console.log(this.state)

//         return (

//             <Row>{
//                 this.x.map(i => {

//                     return (
//                         //    this.state==-1?


//                         <Hornedbeasts
//                             imgVarible={i.image_url}
//                             title={i.title}
//                             description={i.description}
//                             horns={i.horns}
//                             keyword={i.keyword}


//                         />




//                     )
//                 })}

//             </Row >)

//     }
// }

// export default Main

