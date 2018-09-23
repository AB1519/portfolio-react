import React, { Component } from 'react';


class Resume extends Component {
  constructor(props){
    super(props);
    this.state={
      // educationDetails: [],
      WorkDetails:[],
    }
  }

  componentDidMount = () =>{
    this.getEducationDetails(this.props.resumeInfo)
  }

  getEducationDetails = (list) => {
    const network = list.education.map((item) => {
      return(
        <div key={item.degree} className="row item">
          <div className="twelve columns">
            <h3>{item.school}</h3>
            <p className="info">{item.degree} <span>&bull;</span> <em className="date">{item.graduated}</em></p>
            <p>GPA: {item.gpa}</p>
          </div>
        </div>
      )
    })

    const workExp =list.work.map((item) => {
      return(
        <div key={item.company} className="row item">
           <div className="twelve columns">
              <h3>{item.title}</h3>
              <p className="info">{item.company}<span>&bull;</span> <em className="date">{item.years} </em></p>
              <h6>Responsibilities</h6>
              <p>{item.description}</p>
              <p><b>Technology Used:</b> {item.skills}</p>
           </div>
        </div>
      )
    })

    const skills = list.skills.map((item) => {
        const className = 'bar-expand '+item.name.toLowerCase();
        return <li key={item.name}><span style={{width:item.level}} className={className}></span><em>{item.name}</em></li>
    })
       this.setState({
         educationDetails:network,
         WorkDetails:workExp,
         skillSet:skills,
       })
  }

  render() {
    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">{this.state.educationDetails}</div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
         </div>
         <div className="nine columns main-col">
          {this.state.WorkDetails}
         </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>What do I know...? </p>
				<div className="bars">
				   <ul className="skills">
             {this.state.skillSet}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
