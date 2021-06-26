import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import hornsData from './hornsData.json'
import { Form, Button, select } from 'react-bootstrap';
import Product from './Product';
export class Products extends Component {

    /////////////////////
    constructor() {
        super();
        this.myRef = React.createRef();
    }
    onChangeColor(event) {
        console.log(event.target.value);
        this.state = event.target.value
    }

    handelmodal() {
        this.props.handleCallback(this.state)
    }
    ///////////////    


    render(props) {
        return (
            <>
                <hr />
                Select any Horns :
                <Form.Control
                    as="select"
                    custom
                    onChange={this.onChangeColor.bind(this)}>
                    {/* <Form.Group controlId="exampleForm.SelectCustomSizeLg"> */}
                    <Form.Label>Custom select Large</Form.Label>
                    <Form.Control as="select" size="lg" custom>
                        <option value="nan"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Control>
                    {/* </Form.Group> */}
                </Form.Control>
                <Button onClick={() => { this.handelmodal() }} type="submit">Submit form</Button>
            </>
        )
    }
}
export default Products




// class SelectSimple extends Component {

//     render() {
//         return (
//             <div>
//                 <hr />
//                 Select any Horns :
//                 <Form.Control
//                     as="select"
//                     custom
//                     onChange={this.onChangeColor.bind(this)}
//                 >
//                     <option value="nan"></option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="100">100</option>

//                 </Form.Control>
//                 <Button onClick={() => { this.handelmodal() }} type="submit">Submit form</Button>
//             </div>
//         );
//     }
// }

// export default SelectSimple;
