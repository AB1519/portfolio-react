import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resumeData:{},
      dataFetched: false,
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () =>{
    axios
    .get(`http://localhost:3000/resumeData.json`)
    .then((response) => {
      this.setState({
        resumeData: response.data,
        dataFetched: true,
      })
    })
    .catch((error) => {

    })
  }
  // getData(){
  //   $.ajax({
  //     url:'http://localhost:3000/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       console.log(data)
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       alert(err);
  //     }
  //   });
  // }
  render() {
    return (
      <div>
      {
        this.state.dataFetched ?
        <div className="App">
          <Header resumeInfo = {this.state.resumeData.main}/>
          <About  resumeInfo= {this.state.resumeData.main}/>
          <Resume resumeInfo= {this.state.resumeData.resume}/>
          <Projects resumeInfo= {this.state.resumeData.portfolio}/>
          <Contact resumeInfo={this.state.resumeData.main}/>
        </div>
        :
        <h1> Loading </h1>
      }
      </div>
    );
  }
}

export default App;
