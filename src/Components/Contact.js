import React, { Component } from 'react';


class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      street:'',
      city:'',
      state:'',
      zip:''
    }
  }

  componentDidMount = () => {
    this.getContactDetails(this.props.resumeInfo);
  }

  getContactDetails = (list) => {
    const addressData = list.address;
    this.setState({
      name:list.name,
      email:list.email,
      street:addressData.street,
      city:addressData.city,
      state:addressData.state,
      zip:addressData.zip
    })
  }
  render() {
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">Got a project?? E-mail me the details will get back to you!!!
                  </p>
            </div>
         </div>

					   <h4>Details</h4>
					   <p className="address">
						   {this.state.name}<br />
               <span>{this.state.email}</span><br />
               <span>{this.state.street}</span><br />
               <span>{this.state.city},{this.state.state}, {this.state.zip}</span><br />
					   </p>


   </section>
    );
  }
}

export default Contact;
