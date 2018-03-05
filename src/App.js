import React, { Component } from 'react';
import './App.css';
import MyRoutes from './routes';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App Site">
                 <div className="Site-content">
                     <div className="headerdiv">
                         <Header />
                     </div>
                     <div className="main">
                         {MyRoutes}
                     </div>
                 </div>
                <Footer/>
      </div>
    );
  }
}

export default App;
