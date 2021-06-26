import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import hornsData from './hornsData.json'
import { Form, Button, select } from 'react-bootstrap';
import Product from './Product';
export class Products extends Component {

    render(props) {
        return (
            <>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                        <Form.Label>Custom select Large</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        )
    }
}
export default Products






