import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import Foogle from './Foogle_1.png';
import Travagram from './/Travagram_1.png';



class Projects extends Component{
  constructor(){
    super();
    this.state={
        Projects:[{
                    name : "Foogle",
                    description: "Users can add and search through a database of restaurants that are reviewed by culinary professionals in this Foogle Site powered by honesty and trust. Users can also post their reviews for each restaurant.",
                    project_url : "https://github.com/SwethaMuralidharan/Foogle",
                    image_url:"Foogle_1.png"
                   },
                   {
                    name:"Travagram",
                    description:"This Project was implemented in Ruby On Rails. It is a  site for users to view various reviews about cities people have visitied.",
                    project_url:"https://github.com/SwethaMuralidharan/Project-2---Vagabond",
                    image_url:"Travagram_1.png"
                   },
                  {
                    name : "Lovely",
                    description:"This is a dating app which gets what it really takes to sustain a long lasting relationship: shared values.",
                    project_url:"https://github.com/SwethaMuralidharan/Love.ly-FE",
                    image_url:"Lovely_1.png"
                  },
                  {
                    name: "Airbnb",
                    description:"This app lets you to search for rental homes in various places of the world and book homes at the required cost and enjoy your vacation.",
                    project_url:"https://github.com/SwethaMuralidharan/Airbnb-FrontEnd",
                    image_url:"Airbnb_1.png"
                  },
                  {
                    name: "Tic Tac Toe",
                    description:"This app lets you to play tic tac toe game.",
                    project_url:"https://github.com/SwethaMuralidharan/React-Game",
                    image_url:"tic-tac-toe.png"
                  }
                  ]
    }

  }
  render(){
  console.log(this.state.Projects);
    return (
      <div className="container divpad">
        <div className="row">
          <Profile/>
          <div className="col-md-8">
          {this.state.Projects.map(eachProject => {
          return (
                  <div id="user-box" key={eachProject._id} className="card" >
                      <img className="card-img-top user-pic" src={require(`./${eachProject.image_url}`)} alt="Screenshot" />
                      <div className="card-body">
                          <h4 className="card-title">{eachProject.name}</h4>
                          <h4 className="card-title"> <a href={eachProject.project_url}>Github Link</a></h4>
                      </div>
                  </div>
        )
      })}
    </div>
        </div>
      </div>
    )
  }
}
export default Projects;
