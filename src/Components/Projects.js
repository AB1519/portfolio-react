import React, { Component } from 'react';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state={
      projectDetails:[]
    }
  }

  componentDidMount = () => {
    this.getProjectDetails(this.props.resumeInfo);
  }

  getProjectDetails= (list) => {
    const projectData = list.projects.map((item) => {
      return(
        <div key={item.title}>
          <h5>{item.title}</h5>
          {item.url.length>0?<h6><a href={item.url}>GitHub Link</a></h6> : ''}
          <p>{item.description}</p>
          <p><b>Techonologies :  </b> {item.skills}</p>
        </div>
      )
    })

    this.setState({projectDetails:projectData})
  }
  render() {
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Projects Accomplished</h1>
              <div>
          			{this.state.projectDetails}
              </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Projects;
