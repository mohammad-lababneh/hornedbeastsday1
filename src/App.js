import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import  Modalhorned  from './Modalhorned';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import hornsData from './hornsData.json'
class App extends React.Component {

constructor(props){
  super(props);
  this.state ={
    hornsData:hornsData,
    show:false,
    modaldata:{},
  }
}
  
handleShow = (data) =>{
  this.setState({
    show:true,
    modaldata:data,
  })
}

handleClose = () =>{
  this.setState({
    show:false,
  })
}
  render() {

    return (

      <>
        <Header />
        <Container>
        <Main hanelShow ={this.handleShow} data={this.state.hornsData} />
        <Modalhorned handleExit={this.handleClose} showdata={this.state.show} modaldata={this.state.modaldata} />
        </Container>
        <Footer />

      </>
    )
  }
}



export default App;

