import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';

class Projects extends Component{
  constructor(){
    super();
    this.state={
      
    }
  }
  render(){
    return (
      <div className="container divpad">
        <div className="row">
          <Profile/>
        </div>
      </div>
    )
  }
}
export default Projects;
