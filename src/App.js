import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import hornsData from './hornsData.json'
import Product from './Product';
import Hornedbeasts from './Hornedbeasts';
import Filter from './Filter';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      hornsData: hornsData,
      sort: '',
      cat: '',
      modaldata: {},
    }
  }
  handelmodal(data) {
    this.setState({
      show: !this.state.show,
      modaldata: data,
    })
  }

  render() {

    return (

      <>

        <Header />
        <Products data={this.state.hornsData} sorting={this.sorting}/>
        <Container>
        <Main data={this.state.hornsData} handelmodal={this.handelmodal} />
        </Container>
        <Filter />
        <Product />

        {/* <Hornedbeasts data={this.state.hornsData} handelmodal={this.handelmodal} /> */}
        <Footer />
      </>
    )
  }
}



export default App;

