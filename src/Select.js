import React, { Component } from "react";
import { Form,Button } from "react-bootstrap";
import hornsData from './hornsData'
class SelectSimple extends Component {
    constructor() {
        super();
        this.myRef = React.createRef();
    }
  onChangeColor(event) {
    event.preventDefault()
    this.state=event.target.value
  }
handelmodal(){
  // event.preventDefault()
   this.props.callList(this.state)
    
}
  render() {
    return (
      <div>
        <hr />
        Select any Horns :
        <Form.Control
          as="select"
          custom
          onChange={this.onChangeColor.bind(this)}
          onClick={()=>{this.handelmodal()}} type="submit"
        >
             <option value={"0"}>All</option>
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="100"> 3</option>
        </Form.Control>
        {/* <Button onClick={()=>{this.handelmodal()}} type="submit">Submit form</Button> */}
      </div>
    );
  }
}

export default SelectSimple;