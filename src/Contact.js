import React, { Component } from 'react';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Contact extends Component{
  render(){
  console.log("rendering contact");
    return (
        <div className="container divpad">
          <div className="row">
            <Profile/>
            <div className="col-md-8 center-row">
              <div className="">
                  <h2>
                    <span>
                       <img id="imgLnkin" width="5%" height="5%" alt="LinkedIn" src="http://www.whiteroseconstruction.ca/wp-content/uploads/2014/11/linkedin-icon.png" />
                        <a href="https://www.linkedin.com/in/swetha-muralidharan-48238925/">LinkedIn</a>
                    </span>
                  </h2>
                  <br/>
                  <h2>
                  <span>
                      <img id="imggithub" width="5%" height="5%" alt="Github" src="http://techenthu.in/wp-content/uploads/2017/08/github.png"/>
                      <a href="https://github.com/SwethaMuralidharan/"> GitHub </a>
                  </span>
                  </h2>
                  <br/>
                  <h2>
                      <span>
                         <img id="imgEnvelope" width="5%" height="5%" alt="Email" src="https://cdn4.iconfinder.com/data/icons/simple-soft/512/envelope-512.png" />
                         <a href="mailto:swetha.blue.sky@gmail.com/">Email</a>
                      </span>
                  </h2>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Contact;
