import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <div className="container headerdiv">
        <div className="row">
          <div className="col-md-6 divpad">
            <div><h1 className="font_header">Swetha Muralidharan </h1></div>
            <div><h2 className="font_header"> Full Stack Web Developer</h2></div>
          </div>
          <div className="col-md-6 divpadmore">
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded headerdiv">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  {/* <Link to={'about/'} className="nav-item nav-link active">About</Link>
                  <Link to={'projects/'} className="nav-item nav-link font_header">Projects</Link>
                  <Link to={'contact/'} className="nav-item nav-link font_header">Contact</Link> */}
                  <a className="nav-item nav-link active" href="about/">
                      <h2 className="font_header">About</h2>
                          <span className="sr-only">(current)</span>
                  </a>
                  <a className="nav-item nav-link font_header" href="projects/">
                      <h2 className="font_header">Projects</h2>
                  </a>
                  <a className="nav-item nav-link font_header" href="contact/">
                      <h2 className="font_header">Contact</h2>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
export default Header;
