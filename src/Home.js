import React, { Component } from 'react';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Home extends Component{
  render(){
    return (
      <div className="container divpad">
            <div className="row">
                  <Profile/>
                  <div className="col-md-8">
                    <div className="padtop">
                          <section className="section-features">
                              <div className="row">
                                <div className="col span-1-of-3 box">
                                  <h2>Full-Stack</h2><br/>
                                  <p>Well versed in MERN stack and Ruby on Rails. Quick learner. Always looking for the best solutions.</p>
                                </div>
                                <div className="col span-1-of-3 box">
                                  <h2>Location</h2><br/>
                                  <p>Resides in Dublin,CA but willing to work in SF or even remotely for the right opportunities.</p>
                                </div>
                                <div className="col span-1-of-3 box">
                                  <h2>Team Player</h2><br/>
                                  <p>Experience working with project managers and designers in agile environments.</p>
                                </div>
                              </div>
                          </section>
                  </div>
                </div>
            </div>
      </div>
    )
  }
}
export default Home;
