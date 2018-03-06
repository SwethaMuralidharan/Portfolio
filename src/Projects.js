import React, { Component } from 'react';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Projects extends Component{
  constructor(){
    super();
    this.state={
        Projects:[{
                    name : "Foogle",
                    description: "Users can add and search through a list of restaurants and also add reviews.",
                    project_url : "https://github.com/SwethaMuralidharan/Foogle",
                    image_url:"Foogle_1.png",
                    heroku_link : "https://fast-anchorage-49388.herokuapp.com/",
                    tech:"Node.js"
                   },
                   {
                    name:"Travagram",
                    description:"Site for users to view various reviews about cities people have visitied.",
                    project_url:"https://github.com/SwethaMuralidharan/Project-2---Vagabond",
                    image_url:"Travagram_1.png",
                    heroku_link : "https://secret-dawn-85607.herokuapp.com/",
                    tech:"Ruby On Rails"
                   },
                  {
                    name : "Lovely",
                    description:"A dating app gets what it really takes to sustain a long lasting relationship: shared values.",
                    project_url:"https://github.com/SwethaMuralidharan/Love.ly-FE",
                    image_url:"Lovely_1.png",
                    heroku_link : "https://polar-harbor-73704.herokuapp.com/",
                    tech:"MERN Stack"
                  },
                  {
                    name: "Airbnb",
                    description:"This app lets you to search for rental homes in various places and book homes at the desired cost.",
                    project_url:"https://github.com/SwethaMuralidharan/Airbnb-FrontEnd",
                    image_url:"Airbnb_1.png",
                    heroku_link : "https://airbnb-fe.herokuapp.com/",
                    tech:"MERN Stack"
                  },
                  {
                    name: "Tic Tac Toe",
                    description:"This app lets you to play tic tac toe game.",
                    project_url:"https://github.com/SwethaMuralidharan/React-Game",
                    image_url:"tic-tac-toe.png",
                    heroku_link : "https://swetha-ttt.herokuapp.com/",
                    tech:"React.js"
                  }]
    }
  }
  render(){
    return (
      <div className="container divpad">
        <div className="row">
          <Profile/>
          <div className="col-md-8">
            <div className="height">
                    {this.state.Projects.map(eachProject => {
                    return (
                            <div id="project-box" key={eachProject._id}>
                                <img className="project-pic" src={require(`./${eachProject.image_url}`)} alt="Screenshot" />
                                <div className="padtop">
                                    <h4 className="card-title">{eachProject.name} - {eachProject.tech}</h4>
                                    <h6 className="card-title">{eachProject.description}</h6>
                                    <h4 className="card-title">
                                      <a href={eachProject.project_url}>Source</a> &nbsp;&nbsp;&nbsp;
                                      <a href={eachProject.heroku_link}>Demo</a>
                                    </h4>
                                </div>
                            </div>
                  )
                  })}
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects;
