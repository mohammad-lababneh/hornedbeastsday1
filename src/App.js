import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import hornsData from './hornsData.json'
import Modalhorned from './Modalhorned';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        show: false,
        hornsData:hornsData,
        modaldata:{},
    }
}
handelmodal(data) {
    this.setState({
      show: !this.state.show,
      modaldata:data,
    })
}
  render() {

    return (

      <>
      
        <Header />
        <Container>
        <Main  data={this.state.hornsData}/>
        </Container>
        <Footer />
        <Modalhorned handelmodal={this.handelmodal} showdata={this.state.show}  data={this.state.hornsData}/>

      </>
    )
  }
}



export default App;

