import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Profile extends Component{
  render(){
    return (
      <div className="col-md-4">
        <img className="imgContent" src={require('./Pro.jpg')} height="340" width="300" />
      </div>
    )
  }
}
export default Profile;
