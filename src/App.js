
import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import hornsData from './hornsData'
import ModelHornedbeats from './ModelHornedbeats';
import Select from './Select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
export class App extends React.Component {

  myArray = [];
  constructor() {
    super()
    this.myArray = hornsData;
  }
  hornedList = (e) => {
    this.myArray = [];
    for (let i = 0; i < hornsData.length; i++) {
      if (hornsData[i].horns == e) {
        this.myArray.push(hornsData[i])
      }
      else if (e == 0){
        this.myArray.push(hornsData[i])
      }
    }
    this.forceUpdate();
  }
  callList(e) {
    this.hornedList(e);

  }
  render() {

    return (
      <>
                <ModelHornedbeats />
                <Header />
                <Select callList={this.callList} hornedList={this.hornedList} myArray={this.myArray} />
                <Container>
                <Main dataParentToChild={this.myArray} />
                </Container>
                <Footer />
      </>
    )
  }
}
export default App;







