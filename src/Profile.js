import React, { Component } from 'react';

class Profile extends Component{
  render(){
    return (
      <div className="col-md-4">
        <img className="imgContent" alt="ProfilePic" src={require('./Pro.jpg')} height="450" width="400" />
      </div>
    )
  }
}
export default Profile;
