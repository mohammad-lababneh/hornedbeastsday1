import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import hornsData from './hornsData'
import Hornedbeasts from './Hornedbeasts';
import Filter from './Filter';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
class App extends React.Component {

  myArray = [];
  constructor() {
    super()
    this.myArray = hornsData;
  }

    // this.state = {
    //   show: false,
    //   hornsData: hornsData,
    //   modaldata: {},
    // }
  


  handelmodal(data) {
    this.setState({
      show: !this.state.show,
      modaldata: data,
    })
  }


  generateNewList = (xx) => {
    this.myArray = [];
    for (let i = 0; i < hornsData.length; i++) {
      if (hornsData[i].horns == xx) {
        this.myArray.push(hornsData[i])
      }

    }
    this.forceUpdate();
  }

  handleCallback(xx) {
    this.generateNewList(xx);

  }

  render() {

    return (

      <>
{/* data={this.state.hornsData} sorting={this.sorting} */}
        <Header />
        <Products  handleCallback={this.handleCallback} generateNewList={this.generateNewList} myArray={this.myArray} />
        <Container>
        {/* data={this.state.hornsData} handelmodal={this.handelmodal} dataParentToChild={this.myArray} */}
          <Main dataParentToChild={this.myArray}/>
        </Container>
        <Filter />
        <Footer />
      </>
    )
  }
}

export default App;






