import React, { Component } from 'react';


class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      description1:"",
      description2:"",
      occupation:""
    }
  }
  componentDidMount = () => {
    this.getBasicInformation(this.props.resumeInfo)
  }

  getBasicInformation = (list) => {
    const network = list.social.map((item) => {
      return <li key={item.name}><a href={item.url}><i className={item.className}></i></a></li>
    })
    this.setState({
      name: list.name,
      description1:list.description1,
      description2: list.description2,
      networks:network,
      occupation:list.occupation,
    })
  }

  render() {
    return (
      <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{this.state.name}</h1>
            <h3> {this.state.description1} <span> {this.state.occupation} </span> {this.state.description2} <a className="smoothscroll" href="#about">start scrolling</a>
            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              {this.state.networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
