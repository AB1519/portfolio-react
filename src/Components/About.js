import React, { Component } from 'react';

class About extends Component {
  constructor(props){
    super(props);
    this.state={
      contactName:"",
      email:"",
      bioDescription:"",
    }
  }

  componentDidMount = () =>{
    this.getDetails(this.props.resumeInfo)
  }

  getDetails = (list) => {
    this.setState({
      contactName:list.name,
      email:list.email,
      bioDescription:list.bio,
    })
  }


  render() {
    return (
      <section id="about">
      <div className="about">
        <div className="row">
           <div className="three columns">
              <img className="profile-pic"  src="images/Profile.jpg" alt="" />
           </div>
           <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{this.state.bioDescription}</p>
              <div className="row">
                 <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
  						   <span>{this.state.contactName}</span><br />
                 <span>{this.state.email}</span>
  					   </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
   </section>
    );
  }
}

export default About;
